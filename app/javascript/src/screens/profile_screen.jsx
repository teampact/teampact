import React from 'react';
import PropTypes from 'prop-types';

import PersonProfile from '../components/person_profile';

class ProfileScreen extends React.Component {
  componentDidMount() {
    this.fetchProfile();
  }

  fetchProfile() {
    const { match, currentUser, fetchProfile } = this.props;
    const { slug: id } = match.params;

    const { uuid } = currentUser.space;

    fetchProfile(uuid, id);
  }

  render() {
    const { profiles, match } = this.props;
    const { slug } = match.params;

    const { error, loading, byId } = profiles;
    const profile = byId[slug];

    if (error) {
      return (
        <div>
          error %(
        </div>
      );
    }

    if (!profile || loading) {
      return (
        <div>
          loading
        </div>
      );
    }

    return <PersonProfile person={profile} />;
  }
}

ProfileScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  currentUser: PropTypes.shape({
    space: PropTypes.shape({
      uuid: PropTypes.string,
    }),
  }).isRequired,
  fetchProfile: PropTypes.func.isRequired,
  profiles: PropTypes.shape({
    byId: PropTypes.object,
    error: PropTypes.any,
    loading: PropTypes.bool,
  }).isRequired,
};

export default ProfileScreen;
