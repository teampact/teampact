import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ProfilesList from '../../components/profiles_list/profiles_list';

const getProfilesListQuery = () => `
{
  profiles {
    name
    email
    slug
  }
}
`;

function ProfilesListScreen() {
  return (
    <div>
      <Query query={gql(getProfilesListQuery())}>
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <div>
                Loading
              </div>
            );
          }

          if (error) {
            console.log(error);

            return (
              <div>
                Error
              </div>
            );
          }

          const { profiles } = data;
          return <ProfilesList profiles={profiles} />;
        }}
      </Query>
    </div>
  );
}

ProfilesListScreen.propTypes = {};

export { ProfilesListScreen };
