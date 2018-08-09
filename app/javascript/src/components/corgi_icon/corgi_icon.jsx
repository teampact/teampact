import React from 'react';
import styled from 'styled-components';

import CorgiSmile from './corgi_smile.svg';
import CorgiTongue from './corgi_tongue.svg';

const IconContainer = styled.img`
  height: 24px;
  width: 24px;
  margin-bottom: -6px;
  display: inline-block;
`;

class CorgiIcon extends React.Component {
  state = {
    hovered: false,
  };

  render() {
    const icon = src => (
      <IconContainer
        src={src}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      />
    );

    const { hovered } = this.state;

    if (hovered) {
      return icon(CorgiTongue);
    }

    return icon(CorgiSmile);
  }
}

export { CorgiIcon };
