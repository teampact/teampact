import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteWithProps } from './components/route_with_props';
import { ProfileScreen } from './screens/profile_screen';
import { LoginScreen } from './screens/login_screen';
import { ProfilesListScreen } from './screens/profiles_list_screen';

const AuthorisedRoutes = props => (
  <Switch>
    <RouteWithProps {...props} path="/profiles" exact component={ProfilesListScreen} />
    <RouteWithProps {...props} path="/profiles/:slug" component={ProfileScreen} />
    <RouteWithProps {...props} path="/login" component={LoginScreen} />
  </Switch>
);

export { AuthorisedRoutes };
