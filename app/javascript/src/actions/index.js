import { bindActionCreators } from 'redux';

import * as currentUserActions from './current_user';
import * as profileActions from './profiles';

export const mapDispatchToProps = dispatch => bindActionCreators({
  ...currentUserActions,
  ...profileActions,
}, dispatch);
