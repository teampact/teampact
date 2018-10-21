import React from 'react';
import PropTypes from 'prop-types';

const PersonEmail = ({ person }) => (
  <div>
    <a href={`mailto:${person.email}`}>
      {person.email}
    </a>
  </div>
);

PersonEmail.propTypes = {
  person: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default PersonEmail;
