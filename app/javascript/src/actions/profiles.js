import axios from '../api/axios';
import { api } from '../api/endpoints';

export const FETCH_PROFILE_LIST_REQUEST = 'FETCH_PROFILE_LIST_REQUEST';
const fetchProfileListRequest = spaceId => ({ type: FETCH_PROFILE_LIST_REQUEST, spaceId });

export const FETCH_PROFILE_LIST_SUCCESS = 'FETCH_PROFILE_LIST_SUCCESS';
const fetchProfileListSuccess = (spaceId, response) => ({
  type: FETCH_PROFILE_LIST_SUCCESS, response,
});

export const FETCH_PROFILE_LIST_FAILURE = 'FETCH_PROFILE_LIST_FAILURE';
const fetchProfileListFailure = (spaceId, error) => ({
  type: FETCH_PROFILE_LIST_FAILURE, error,
});

export const fetchProfileList = spaceId => (dispatch) => {
  dispatch(fetchProfileListRequest(spaceId));

  axios.get(api.spaceProfileList(spaceId))
    .then(res => dispatch(fetchProfileListSuccess(spaceId, res)))
    .catch(error => dispatch(fetchProfileListFailure(spaceId, error)));
};
