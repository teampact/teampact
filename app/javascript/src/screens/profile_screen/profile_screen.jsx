import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { PersonProfile } from '../../components/person_profile';

const getProfileQuery = id => `{
  profile(id: "${id}"){
    email
    name 
    slug
    tagline
  }
}`;

class ProfileScreen extends React.Component {
  render() {
    const { match } = this.props;
    const { slug: id } = match.params;

    return (
      <Query query={gql(getProfileQuery(id))}>
        {({ loading, error, data }) => {
          console.log({ loading, error, data });

          if (loading) {
            return (
              <div>
                loading
              </div>
            );
          }

          if (error) {
            console.log(error);

            return (
              <div>
                error %(
              </div>
            );
          }

          return <PersonProfile person={data.profile} />;
        }}

      </Query>
    );
  }
}

export { ProfileScreen };
