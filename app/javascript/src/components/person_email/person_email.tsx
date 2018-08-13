import * as React from 'react';

import { IPersonProfile } from '../../screens/person_screen/i_person_profile';

export function PersonEmail({ person }: { person: IPersonProfile }) {
  return <div>
    <a href={ `mailto:${person.email}` }>
      { person.email }
    </a>
  </div>;
}
