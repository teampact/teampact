import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxBlock = styled.input`
  margin-right: 5px;
  display: inline-block;
  width: 16px;
  height: 16px;
`;

const Checkbox = ({ checked, name, onChange }) => {
  const onClick = (event) => {
    const { checked } = event.target;

    onChange({ [name]: checked });
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
