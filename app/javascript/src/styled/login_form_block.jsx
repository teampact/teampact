import styled from 'styled-components';
import { media } from './media';

export const LoginFormBlock = styled.div`
  width: 100%;

   @media (min-width: ${media.small}) {
     width: 400px;
     margin: 0 auto;
   }
`;
