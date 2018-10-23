import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  font-size: 1.4rem;
  padding: 1rem 10px;
  margin: 0 -10px;

  display: flex;
  justify-content: space-between;
  background: #eeeeee;
  border-bottom-left-radius: 5px;  
  border-bottom-right-radius: 5px;  
`;


const Navigation = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  
  li {
    display: inline-block;
    margin: 0 5px;
    padding: 0;
  }
`;

class Header extends Component {
  render() {
    const { currentUser } = this.props;
    const { name } = currentUser.current_user;

    return (
      <div className="container">
        <HeaderBlock>
          <div>
            teampact
          </div>

          <div>
            <Navigation>
              <li><Link to="/">People</Link></li>
              <li><Link to="/skills">Skills</Link></li>
            </Navigation>
          </div>

          <div>
            {name}
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
