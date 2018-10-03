import { combineReducers } from 'redux';

import { currentUser } from './current_user';

export const rootReducer = combineReducers({
  currentUser,
});

export const mapStateToProps = state => ({ ...state });
