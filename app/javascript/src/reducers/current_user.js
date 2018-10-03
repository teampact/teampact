import { FETCH_CURRENT_USER_FAILURE } from '../actions/current_user';

const initialState = {
  user: {},
  loading: false,
  authorised: false,
};

export const currentUser = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_CURRENT_USER_FAILURE:
    console.log(action.error.response);
    return state;

  default:
    return state;
  }
};
