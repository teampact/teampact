import { combineReducers } from 'redux';

import { currentUser } from './current_user';
import profiles from './profiles';

export const rootReducer = combineReducers({
  currentUser,
  profiles,
});

export const mapStateToProps = state => ({ ...state });
