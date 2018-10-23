import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfilesList from '../components/profiles_list';

class ProfilesListScreen extends Component {
  componentDidMount() {
    this.fetchProfiles();
  }

  fetchProfiles() {
    const { fetchProfileList, currentUser } = this.props;
    const { uuid } = currentUser.space;
    fetchProfileList(uuid);
  }

  render() {
    const { profiles } = this.props;
    const { error, loading } = profiles;

    if (loading) {
      return (
        <div>
          Loading
        </div>
      );
    }

    if (error) {
      console.log({ error });

      return (
        <div>
          Error
        </div>
      );
    }

    return <ProfilesList profiles={profiles} />;
  }
};

ProfilesListScreen.propTypes = {
  profiles: PropTypes.shape({
    byId: PropTypes.object, list: PropTypes.array,
  }).isRequired,
  fetchProfileList: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    space: PropTypes.shape({ uuid: PropTypes.string })
  }).isRequired,
};

export default ProfilesListScreen;
