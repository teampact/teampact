import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../theme';

const ButtonBlock = styled.button`
  background-color: ${theme.colors.primary};
  font-size: 20px;
  color: white;
  padding: 5px 15px 7px;
  border: none;
  border-radius: 3px;
  font-family: ${theme.serifFont};
`;

const Button = ({ value, onClick }) => (
  <ButtonBlock onClick={onClick}>
    {value}
  </ButtonBlock>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
