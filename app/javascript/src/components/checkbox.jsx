import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../styled/media';

const CheckboxBlock = styled.input`
  margin-right: 5px;
  display: inline-block;
  
  @media screen and (min-width: ${media.small}){
    width: 16px;
    height: 16px;
  }
`;

const Checkbox = ({ checked, name, onChange }) => {
  const onClick = (event) => {
    onChange({ [name]: event.target.checked });
  };

  return (
    <CheckboxBlock
      type="checkbox"
      checked={checked}
      name={name}
      onChange={onClick}
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { Checkbox };
