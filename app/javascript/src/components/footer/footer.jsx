import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CorgiIcon } from '../corgi_icon/corgi_icon';

const FooterContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid #CCCCCC;
  padding-top: 20px;
`;

const HeartContainer = styled.span`
  color: red;
  padding: 0 5px;
`;

const Footer = () => (
  <FooterContainer>
    Made with

    <HeartContainer>
      <FontAwesomeIcon icon="heart" />
    </HeartContainer>

    by

    <CorgiIcon />

    Komandinis darbas
  </FooterContainer>
);

export { Footer };
