import * as React from 'react';
import { injectGlobal } from 'styled-components';

import './components/font-awesome';
import { Footer } from './components/footer';
import { LoginScreen } from './screens/login_screen';

injectGlobal`
body { 
  font-weight: 400;
  font-size: 18px;
  color: #333333;
}

body * {
  font-family: 'Lato', sans-serif;
}

`;

export const App = () => (
  <div className="container">
    <LoginScreen />
    <Footer />
  </div>
);
