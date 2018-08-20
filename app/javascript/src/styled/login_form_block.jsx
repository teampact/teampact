import styled from 'styled-components';
import { media } from './media';

export const LoginFormBlock = styled.div`
  width: 100%;
  
  @media (min-width: ${media.small}) {
    width: 400px;
    margin: 0 auto;
  }
`;


export const LoginFormContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  min-height: 80vh;

`
