import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
`;

const Votes = ({ voteAverage }) => (
  <Text>
    {voteAverage > 0 ? `⭐️ ${voteAverage.toFixed(1)}/10` : 'Coming soon'}
  </Text>
);
export default Votes;
