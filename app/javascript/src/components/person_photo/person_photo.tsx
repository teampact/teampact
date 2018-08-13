import * as React from 'react';
import * as styled from 'styled-components';

const PhotoContainer = styled.default('img')`
  max-height: 200px;
  max-width: 200px;
  border-radius: 5px;
`;

const PersonPhoto = ({ photo }: { photo: string }) => (
  <PhotoContainer src={ photo } />
);

export { PersonPhoto };
