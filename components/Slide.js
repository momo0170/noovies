import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import styled from 'styled-components/native';
import { makeImgPath } from '../utils';
import Poster from './Poster';

const BgImg = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${(props) => props.theme.opacity};
`;
const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Column = styled.View`
  width: 60%;
  margin-left: 15px;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.isDark ? 'white' : 'black')};
`;
const Overview = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  margin-top: 10px;
  color: ${(props) => (props.isDark ? 'white' : 'black')};
`;
const Votes = styled(Overview)`
  margin-top: 3px;
  font-size: 12px;
`;

const Slide = ({
  backdropPath,
  posterPath,
  originalTitle,
  voteAverage,
  overview,
}) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={{ flex: 1 }}>
      <BgImg blurRadius={4} source={{ uri: makeImgPath(backdropPath) }} />
      <Wrapper>
        <Poster path={posterPath} />
        <Column>
          <Title isDark={isDark}>{originalTitle}</Title>
          {voteAverage > 0 ? (
            <Votes isDark={isDark}>⭐️ 평점 {voteAverage.toFixed(1)}/10</Votes>
          ) : null}
          <Overview isDark={isDark}>{overview.slice(0, 80)}...</Overview>
        </Column>
      </Wrapper>
    </View>
  );
};
export default Slide;
