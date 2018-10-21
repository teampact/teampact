import React from 'react';
import PropTypes from 'prop-types';

const PersonOrganizations = ({ organizations }) => (
  <div>
    {organizations.map(o => <div key={o.slug}>{o.name}</div>)}
  </div>
);

PersonOrganizations.propTypes = {
  organizations: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default PersonOrganizations;
