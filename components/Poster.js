import React from 'react';
import styled from 'styled-components/native';
import { makeImgPath } from '../utils';

const Img = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 5px;
`;

const Poster = ({ path }) => <Img source={{ uri: makeImgPath(path) }} />;
export default Poster;
