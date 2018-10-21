import * as React from 'react';

import PersonProfile from '../components/person_profile';

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
