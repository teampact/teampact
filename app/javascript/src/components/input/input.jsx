import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBlock = styled.input`
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid rgba(0.53, 0.53, 0.49, 0.5);
  width: 100%;
  outline: none;
`;

class Input extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'password'])
  };

  static defaultProps = {
    value: '',
    placeholder: '',
    type: 'text',
  };

  state = {
    value: this.props.value,
  };

  onChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
    const { name } = this.props;
    this.props.onChange({ [name]: value });
  };

  render() {
    const { value } = this.state;

    const { type, placeholder } = this.props;

    return (
      <InputBlock
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={this.onChange}
        type={type}
      />
    );
  }
}

export { Input };
