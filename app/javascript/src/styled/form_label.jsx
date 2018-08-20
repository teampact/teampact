import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

export const FormLabel = styled.div`
  margin: 0 0 5px;
`;

export const FormError = styled.div`
   color: ${theme.colors.alert};
   padding: 5px 0; 
`;
