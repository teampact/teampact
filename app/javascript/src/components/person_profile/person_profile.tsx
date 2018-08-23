import * as React from 'react';
import styled from 'styled-components';

import { IPersonProfile } from '../../screens/profile_screen/i_person_profile';

import { PersonEmail } from '../person_email/person_email';
import { PersonOrganizations } from '../person_organizations/person_organizations';
import { PersonPhoto } from '../person_photo';

const NameBlock = styled.div`
  font-size: 24px;
`;

export const PersonProfile = ({ person }: { person: IPersonProfile }) => {

  return (
    <div className="container">

      <PersonPhoto photo={ person.photo } />
      <NameBlock>
        { person.name }
      </NameBlock>

      <div>
        { person.representation }
      </div>

      <PersonEmail person={ person } />
      <PersonOrganizations organizations={person.organizations}/>
    </div>
  );
};
