import {
  FETCH_PROFILE_LIST_FAILURE,
  FETCH_PROFILE_LIST_REQUEST,
  FETCH_PROFILE_LIST_SUCCESS
} from '../actions/profiles';

const initialState = {
  byId: {},
  list: [],
  loading: false,
  error: {},
};

function fetchProfileListRequest(state) {
  return { ...state, loading: true };
}

function fetchProfileListSuccess(state, action) {
  // action.response.data
  console.log(action.response.data);
  return { state, loading: false };
};

function fetchProfileListFailure(state, error) {
  console.log(error);
  return { state, loadind: false };
}

const map = {
  [FETCH_PROFILE_LIST_REQUEST]: fetchProfileListRequest,
  [FETCH_PROFILE_LIST_SUCCESS]: fetchProfileListSuccess,
  [FETCH_PROFILE_LIST_FAILURE]: fetchProfileListFailure,
};

export const profiles = (state = initialState, action) => {
  if (map[action.type]) return map[action.type](state, action);
  return state;
};
