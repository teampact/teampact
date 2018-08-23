import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteWithProps } from './components/route_with_props/route_with_props';
import { ProfileScreen } from './screens/profile_screen';
import { LoginScreen } from './screens/login_screen';

const Routes = props => (
  <Switch>
    <RouteWithProps path="/profile/:slug" component={ProfileScreen} />
    <RouteWithProps path="/login" component={LoginScreen} />
  </Switch>
);

export { Routes };
