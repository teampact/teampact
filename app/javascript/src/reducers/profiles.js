import {
  FETCH_PROFILE_LIST_FAILURE,
  FETCH_PROFILE_LIST_REQUEST,
  FETCH_PROFILE_LIST_SUCCESS
} from '../actions/profiles';

const initialState = {
  byId: {},
  list: [],
  loading: false,
  error: null,
};

function fetchProfileListRequest(state) {
  return { ...state, loading: true };
}

function fetchProfileListSuccess(state, action) {
  const { profiles } = action.response.data;
  const list = profiles.map(p => p.slug);
  const byId = profiles.reduce((acc, profile) => {
    acc[profile.slug] = profile;
    return acc;
  }, {});

  return {
    ...state, list, byId, loading: false,
  };
}

function fetchProfileListFailure(state, error) {
  console.log(error);
  return { state, loadind: false };
}

const map = {
  [FETCH_PROFILE_LIST_REQUEST]: fetchProfileListRequest,
  [FETCH_PROFILE_LIST_SUCCESS]: fetchProfileListSuccess,
  [FETCH_PROFILE_LIST_FAILURE]: fetchProfileListFailure,
};

const profiles = (state = initialState, action) => {
  if (map[action.type]) return map[action.type](state, action);
  return state;
};

export default profiles;
