import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteWithProps } from './components/route_with_props';
import Header from './components/header';
import ProfilesListScreen from './screens/profiles_list_screen';
import ProfileScreen from './screens/profile_screen';

const routes = [
  { path: '/', component: ProfilesListScreen },
  { path: '/profiles/:slug', component: ProfileScreen },
];

const AuthorisedRoutes = (props) => {
  const { currentUser } = props;


  return (
    <div>
      <Header currentUser={currentUser} />

      <Switch>
        {routes.map(route => (

          <RouteWithProps
            exact
            {...props}
            path={route.path}
            component={route.component}
            key={route.path}
          />

        ))}
      </Switch>
    </div>
  );
};

export { AuthorisedRoutes };
