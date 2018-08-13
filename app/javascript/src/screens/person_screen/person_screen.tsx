import * as React from 'react';
import { PersonProfile } from '../../components/person_profile';

const persons = {
  'kostas-kolomeetz': {
    crafts: [
      { slug: 'rails', name: 'Ruby on Rails' },
    ],
    email: 'kolomeetz@gmail.com',
    name: 'Kostas Kolomeetz',
    organizations: [
      {
        name: 'Komandinis darbas',
        role: 'software developer and director',
        slug: 'komandinis-darbas',
      },
    ],
    photo: 'https://scontent.fvno3-1.fna.fbcdn.net/v/t1.0-9/10255821_10152804873445884_2926798732189406684_n.jpg?_nc_cat=0&oh=3a6fa029c2ba12c10b40fed5a0772d3b&oe=5BC762BA',
    representation: 'Full-stack product maker',
  },
};

class PersonScreen extends React.Component {
  public render() {
    return (
      <PersonProfile person={ persons['kostas-kolomeetz'] } />
    );
  }
}

export { PersonScreen };
