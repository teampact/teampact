import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  font-size: 1.4rem;
  padding: 1rem 10px;
  margin: 0 -10px;

  display: flex;
  justify-content: space-between;
  background: #eeeeee;
  border-bottom-left-radius: 5px;  
  border-bottom-right-radius: 5px;  
`

class Header extends Component {
  render() {
    const { current_user } = this.props.currentUser;
    return (
      <div className="container">
        <HeaderBlock>
          <div>
            teampact
          </div>
          <div>
            {current_user.name}
          </div>
        </HeaderBlock>
      </div>
    );
  }
}

Header.propTypes = {
  currentUser: PropTypes.shape({
    current_user: PropTypes.shape(),
    space: PropTypes.shape({}),
  }).isRequired,
};

export default Header;
