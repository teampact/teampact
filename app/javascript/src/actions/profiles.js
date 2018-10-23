import axios from '../api/axios';
import { api } from '../api/endpoints';

export const FETCH_PROFILE_LIST_REQUEST = 'FETCH_PROFILE_LIST_REQUEST';
const fetchProfileListRequest = spaceId => ({
  type: FETCH_PROFILE_LIST_REQUEST,
  spaceId,
});

export const FETCH_PROFILE_LIST_SUCCESS = 'FETCH_PROFILE_LIST_SUCCESS';
const fetchProfileListSuccess = (spaceId, response) => ({
  type: FETCH_PROFILE_LIST_SUCCESS,
  response,
});

export const FETCH_PROFILE_LIST_FAILURE = 'FETCH_PROFILE_LIST_FAILURE';
const fetchProfileListFailure = (spaceId, error) => ({
  type: FETCH_PROFILE_LIST_FAILURE,
  error,
});

export const fetchProfileList = spaceId => (dispatch) => {
  dispatch(fetchProfileListRequest(spaceId));

  axios.get(api.spaceProfileList(spaceId))
    .then(res => dispatch(fetchProfileListSuccess(spaceId, res)))
    .catch(error => dispatch(fetchProfileListFailure(spaceId, error)));
};

export const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST';
const fetchProfileRequest = (spaceId, id) => ({
  type: FETCH_PROFILE_REQUEST,
  id,
  spaceId,
});

export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
const fetchProfileSuccess = (spaceId, id, response) => ({
  type: FETCH_PROFILE_SUCCESS,
  id,
  spaceId,
  response,
});

export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';
const fetchProfileFailure = (spaceId, id, error) => ({
  type: FETCH_PROFILE_FAILURE,
  id,
  spaceId,
  error,
});

export const fetchProfile = (spaceId, id) => (dispatch) => {
  dispatch(fetchProfileRequest(spaceId, id));

  axios.get(api.spaceProfile(spaceId, id))
    .then(response => dispatch(fetchProfileSuccess(spaceId, id, response)));
};
