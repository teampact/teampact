import * as React from 'react';
import { IPersonOrganization } from '../../screens/person_screen/i_person_organization';

export function PersonOrganizations({organizations}: { organizations: IPersonOrganization[]}) {
  return <div>
    {organizations.map(o => <div key={o.slug}>{o.name}</div>)}
  </div>;
}
