import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { media } from './media';

export const H1Block = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: ${theme.serifFont};
  padding: 0;
  margin: 0;
  
  @media (min-width: ${media.small}) {
    font-size: 36px;
  }
`;
