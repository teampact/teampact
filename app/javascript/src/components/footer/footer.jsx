import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid #999;
  padding-top: 20px;
`;

const Footer = () => (
  <FooterContainer>
    Made with ❤️ by Komandinis darbas
  </FooterContainer>
);

export { Footer };
