import React from 'react';
import styled from 'styled-components';

import PersonEmail from './person_email';
import PersonOrganizations from './person_organizations';
import PersonPhoto from './person_photo';

const NameBlock = styled.div`
  font-size: 24px;
`;

const PersonProfile = ({ person }) => {
  return (
    <div className="container">
      <PersonPhoto photo={ person.photo } />
      <NameBlock>
        { person.name }
      </NameBlock>

      <div>
        { person.tagline }
      </div>

      <PersonEmail person={ person } />
      <PersonOrganizations organizations={person.organizations || []}/>
    </div>
  );
};


export default PersonProfile;
