import * as React from 'react';
import styled from 'styled-components'

const NameBlock = styled.div`
  font-size: 24px;
`;

const user = {
  name: 'Kostas Kolomeetz',
};

export const ProfilePage = () => (
  <div>
    <NameBlock>
      {user.name}
    </NameBlock>
  </div>
);
