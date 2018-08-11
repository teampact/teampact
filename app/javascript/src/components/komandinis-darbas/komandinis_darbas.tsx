import * as React from 'react';
import styled from 'styled-components';

const CorgiSmile = require('./corgi_smile.svg') as string;
const CorgiTongue = require('./corgi_tongue.svg') as string;

const IconContainer = styled.a`
  padding-left: 24px;
  display: inline-block;
  background-image: url(${CorgiSmile});
  background-position-x: 0;
  background-position-y: -3px;
  background-repeat: no-repeat;
  background-size: 24px 24px;
  color: inherit;
  
  &:hover {
    background-image: url(${CorgiTongue});
    color: red;
  }
`;

const KomandinisDarbas = () => (
    <IconContainer href="https://www.komandinis-darbas.lt">
        Komandinis darbas
    </IconContainer>
);

export { KomandinisDarbas };
