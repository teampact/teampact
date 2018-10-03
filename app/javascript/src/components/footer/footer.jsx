import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { KomandinisDarbas } from '../komandinis-darbas';

const FooterContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid #CCCCCC;
  padding-top: 20px;
  font-size: 0.8rem;
`;

const HeartContainer = styled.span`
  color: red;
  padding: 0 5px;
`;

const Footer = () => (
  <div className="container">
    <FooterContainer>
      Made with
      <HeartContainer><FontAwesomeIcon icon="heart" /></HeartContainer>
      by
      <KomandinisDarbas />
    </FooterContainer>
  </div>
);

export { Footer };
