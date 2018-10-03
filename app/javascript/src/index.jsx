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

injectGlobal`
body { 
  font-weight: 400;
  font-size: 16px;
  color: #333333;
}

@media screen and (min-width: ${media.small}){
  body {
    font-size: 18px;
  }
}

body * {
  font-family: 'Lato', sans-serif;
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
