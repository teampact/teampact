import * as React from 'react';
import { injectGlobal } from 'styled-components';
import { Route } from 'react-router-dom';
import './components/font-awesome';
import { Footer } from './components/footer';
import { LoginScreen } from './screens/login_screen';
import { RestorePasswordScreen } from './screens/restore_password_screen';
import { media } from './styled/media';
import { Routes } from './routes';

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

export const App = () => {
  return (
    <div className="container">
      <Routes />
      <Route component={ Footer } />
    </div>
  );
};
