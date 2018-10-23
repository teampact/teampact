import * as React from 'react';
import { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './components/font-awesome';
import { Footer } from './components/footer';
import { media } from './styled/media';
import { mapStateToProps } from './reducers';
import { mapDispatchToProps } from './actions';
import Authentication from './authentication';
import { theme } from './theme/theme';

injectGlobal`
html{
  box-sizing: border-box;
  font-size: 10px;
}

*, *:before, *:after {
  box-sizing: inherit;
}
    
body { 
  font-weight: 400;
  color: ${theme.colors.black};
  padding: 0;
  margin: 0;
  font-size: 1.6rem
}

@media screen and (min-width: ${media.small}){
  body {
    font-size: 1.8rem;
  }
}

body * {
  font-family: ${theme.sansSerifFont};
}

a {
  color: ${theme.colors.primary};
}
`;

const App = props => (
  <Router>
    <div className="container">
      <Authentication {...props} />
      <Route component={Footer} />
    </div>
  </Router>
);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
