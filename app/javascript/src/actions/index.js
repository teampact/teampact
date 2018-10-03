import { bindActionCreators } from 'redux';

import * as currentUserActions from './current_user';

export const mapDispatchToProps = dispatch => bindActionCreators({
  ...currentUserActions,
}, dispatch);
