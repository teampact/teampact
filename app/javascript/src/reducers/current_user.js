import {
  FETCH_CURRENT_USER_FAILURE,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS
} from '../actions/current_user';

const initialState = {
  current_user: {},
  loading: false,
  authorized: false,
  space: {},
};

function fetchCurrentUserSuccess(state, action) {
  const { current_user, authorized, space } = action.response.data;
  return { ...state, loading: false, current_user, authorized, space };
}

export const currentUser = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_CURRENT_USER_REQUEST:
    return { ...state, loading: true };
  case FETCH_CURRENT_USER_SUCCESS:
    return fetchCurrentUserSuccess(state, action);

  case FETCH_CURRENT_USER_FAILURE:
    console.log(action.error.response);
    return { ...state, authorized: false, loading: false };

  default:
    return state;
  }
};
