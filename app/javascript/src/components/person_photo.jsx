import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PhotoContainer = styled('img')`
  max-height: 200px;
  max-width: 200px;
  border-radius: 5px;
`;

const PersonPhoto = ({ photo }) => (
  <PhotoContainer src={photo} />
);

PersonPhoto.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default PersonPhoto;
