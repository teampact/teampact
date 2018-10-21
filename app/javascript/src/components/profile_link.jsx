import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProfileLink(props) {
  const { profile } = props;
  return (
    <Link to={`/profiles/${profile.slug}`}>
      {profile.name}
    </Link>
  );
}

ProfileLink.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
};

export { ProfileLink };
