import {
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_LIST_FAILURE,
  FETCH_PROFILE_LIST_REQUEST,
  FETCH_PROFILE_LIST_SUCCESS, FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS,
} from '../actions/profiles';

const initialState = {
  byId: {},
  list: [],
  loading: false,
  error: null,
};

function fetchProfileListRequest(state) {
  return {
    ...state,
    loading: true,
    error: null,
    list: [],
  };
}

function fetchProfileListSuccess(state, action) {
  const { profiles } = action.response.data;
  const list = profiles.map(p => p.slug);
  const byId = profiles.reduce((acc, profile) => {
    acc[profile.slug] = profile;
    return acc;
  }, {});

  return {
    ...state,
    list,
    byId,
    loading: false,
  };
}

function fetchProfileListFailure(state, action) {
  console.log(action.error);
  return {
    ...state,
    loading: false,
    error: true,
  };
}

function fetchProfileRequest(state, action) {
  return {
    ...state,
    loading: true,
    error: null,
  };
}

function fetchProfileSuccess(state, action) {
  const { data: profile } = action.response;
  const byId = {
    ...state.byId,
    [profile.slug]: profile,
  };

  return {
    ...state,
    loading: false,
    byId,
  };
}

function fetchProfileFailure(state, action) {
  console.log(action.error);

  return {
    ...state,
    loading: false,
    error: true,
  };
}

const map = {
  [FETCH_PROFILE_LIST_REQUEST]: fetchProfileListRequest,
  [FETCH_PROFILE_LIST_SUCCESS]: fetchProfileListSuccess,
  [FETCH_PROFILE_LIST_FAILURE]: fetchProfileListFailure,

  [FETCH_PROFILE_REQUEST]: fetchProfileRequest,
  [FETCH_PROFILE_SUCCESS]: fetchProfileSuccess,
  [FETCH_PROFILE_FAILURE]: fetchProfileFailure,
};

const profiles = (state = initialState, action) => {
  if (map[action.type]) return map[action.type](state, action);
  return state;
};

export default profiles;
