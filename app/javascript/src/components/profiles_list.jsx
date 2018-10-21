import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ProfileLink } from './profile_link';

const Table = styled.table`
  width: 100%;
  border-bottom: 1px solid #ccc;
  
  td, th {
    padding: 10px 0;
  }
  
  thead th { 
     text-align: left;    
  }
  
  tbody td {
    border-top: 1px solid #eee;
  }
  
`;

function ProfilesList(props) {
  const { profiles } = props;

  return (
    <div className="container">
      <h1>
        Profiles
      </h1>

      <Table>
        <thead>
          <tr>
            <th>
            Name
            </th>
            <th>
            Email
            </th>
          </tr>
        </thead>

        <tbody>
          {profiles.map(profile => (
            <tr key={profile.slug}>
              <td>
                <ProfileLink profile={profile} />
              </td>
              <td>
                {profile.email}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

ProfilesList.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default ProfilesList;
