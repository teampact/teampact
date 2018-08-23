import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithProps = ({
  path, exact, strict, component: Component, location, ...rest
}) => (
  <Route
    path={path}
    exact={exact}
    strict={strict}
    location={location}
    render={props => <Component {...rest} {...props} />}
  />
);

RouteWithProps.propTypes = Route.propTypes;

export { RouteWithProps };
