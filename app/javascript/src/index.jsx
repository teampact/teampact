import PropTypes from 'prop-types';
import React from 'react';
import { Footer } from './components/footer';

import './components/font-awesome';

import { injectGlobal } from 'styled-components';

injectGlobal`
body {
  font-family: system-ui, -apple-system, system-ui, ".SFNSText-Regular", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #333333;
}
`;

export const App = props => (
  <div>
    Hello
    {' '}
    {props.name}
!

    <Footer />
  </div>
);

App.defaultProps = {
  name: 'David',
};

App.propTypes = {
  name: PropTypes.string,
};
