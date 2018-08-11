import * as React from 'react';
import { injectGlobal } from 'styled-components';

import './components/font-awesome';
import { Footer } from './components/footer';
import { ProfilePage } from './components/profile_page';

injectGlobal`
body {
  font-family: system-ui, -apple-system, system-ui, ".SFNSText-Regular", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #333333;
}
`;

export const App = () => (
  <div>
    <ProfilePage />
    <Footer />
  </div>
);

// App.defaultProps = {
// };
//
// App.propTypes = {
// };
