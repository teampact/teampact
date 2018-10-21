import React, { Component } from 'react';
import { AuthorisedRoutes } from './AuthorisedRoutes';
import LoginScreen from './screens/login_screen';

class Authentication extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    const { currentUser } = this.props;
    const { loading, authorized } = currentUser;

    if (loading) {
      return <div> Loading </div>;
    }

    if (authorized) {
      return <AuthorisedRoutes {...this.props} />;
    }

    return <LoginScreen {...this.props} />;
  }
}

Authentication.propTypes = {};

export default Authentication;
