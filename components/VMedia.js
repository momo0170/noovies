import React from 'react';
import styled from 'styled-components/native';
import Poster from './Poster';
import Votes from './Votes';

const Movie = styled.View`
  align-items: center;
`;
const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const VMedia = ({ posterPath, title, voteAverage }) => (
  <Movie>
    <Poster path={posterPath} />
    <Title>
      {title.slice(0, 7)}
      {title.length > 13 ? '...' : null}
    </Title>
    <Votes voteAverage={voteAverage} />
  </Movie>
);
export default VMedia;
