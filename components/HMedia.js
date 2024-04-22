import React from 'react';
import styled from 'styled-components/native';
import Poster from './Poster';

const HMovie = styled.View`
  padding: 0px 20px;
  flex-direction: row;
`;
const HColumn = styled.View`
  margin: 10px;
  width: 80%;
`;
const Overview = styled.Text`
  color: white;
  opacity: 0.7;
  width: 80%;
  font-size: 13px;
`;
const Release = styled.Text`
  color: white;
  font-size: 12px;
  margin-bottom: 10px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const HMedia = ({ posterPath, title, overview, releaseDate }) => (
  <HMovie>
    <Poster path={posterPath} />
    <HColumn>
      <Title>{title}</Title>
      <Release>
        {`개봉일 ${new Date(releaseDate).toLocaleDateString('ko', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}`}
      </Release>
      <Overview>
        {overview !== '' && overview.length > 140
          ? `${overview.slice(0, 140)}...`
          : overview}
      </Overview>
    </HColumn>
  </HMovie>
);
export default HMedia;
