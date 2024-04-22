import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import { Dimensions } from 'react-native';
import Slide from '../components/Slide';
import { ScrollView } from 'react-native';
import Poster from '../components/Poster';
import Votes from '../components/Votes';
import VMedia from '../components/VMedia';
import HMedia from '../components/HMedia';

const API_KEY = 'afb51872d9b980b040b8a7bd249cb9e5';

const Container = styled.ScrollView``;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ListTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const ListContainer = styled.View`
  margin-bottom: 40px;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Movies = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const getTrending = async () => {
    const reponse = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=ko-KR`
    );
    const { results } = await reponse.json();
    setTrendingMovies(results);
  };
  const getNowPlaying = async () => {
    const reponse = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
    );
    const { results } = await reponse.json();
    setNowPlayingMovies(results);
  };
  const getUpComing = async () => {
    const reponse = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`
    );
    const { results } = await reponse.json();
    setUpComingMovies(results);
  };
  const getDate = async () => {
    await Promise.all([getTrending(), getUpComing(), getNowPlaying()]);
    setLoading(false);
  };
  const onRefresh = async () => {
    setRefreshing(true);
    await getDate();
    setRefreshing(false);
  };

  useEffect(() => {
    getDate();
  }, []);

  return loading ? (
    <Loader>
      <ActivityIndicator />
    </Loader>
  ) : (
    <FlatList
      onRefresh={onRefresh}
      refreshing={refreshing}
      ListHeaderComponent={
        <>
          <Swiper
            loop
            horizontal
            autoplay
            autoplayTimeout={4}
            showsButtons={false}
            showsPagination={false}
            containerStyle={{
              width: '100%',
              height: SCREEN_HEIGHT / 4,
              marginBottom: 20,
            }}
          >
            {nowPlayingMovies.map((movie) => (
              <Slide
                key={movie.id}
                backdropPath={movie.backdrop_path}
                posterPath={movie.poster_path}
                originalTitle={movie.title}
                voteAverage={movie.vote_average}
                overview={movie.overview}
              />
            ))}
          </Swiper>
          <ListContainer>
            <ListTitle>Trending Movies</ListTitle>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={trendingMovies}
              contentContainerStyle={{ paddingHorizontal: 20 }}
              ItemSeparatorComponent={() => <View style={{ width: 20 }}></View>}
              renderItem={({ item }) => (
                <VMedia
                  posterPath={item.poster_path}
                  title={item.title}
                  voteAverage={item.vote_average}
                />
              )}
            />
          </ListContainer>
          <ListTitle>Coming soon</ListTitle>
        </>
      }
      data={upComingMovies}
      ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
      renderItem={({ item }) => (
        <HMedia
          key={item.id}
          posterPath={item.poster_path}
          title={item.title}
          overview={item.overview}
          releaseDate={item.release_date}
        />
      )}
    />
  );
};
export default Movies;
