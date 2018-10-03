import { api } from '../api/endpoints';
import axios from '../api/axios';

export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';
export const FETCH_CURRENT_USER_FAILURE = 'FETCH_CURRENT_USER_FAILURE';
export const FETCH_CURRENT_USER_REQUEST = 'FETCH_CURRENT_USER_REQUEST';

const fetchCurrentUserRequest = () => ({ type: FETCH_CURRENT_USER_REQUEST });

const fetchCurrentUserSuccess = response => ({
  type: FETCH_CURRENT_USER_SUCCESS, response,
});

const fetchCurrentUserFailure = error => ({ type: FETCH_CURRENT_USER_FAILURE, error });

export const fetchCurrentUser = () => (dispatch) => {
  dispatch(fetchCurrentUserRequest());

  axios.get(api.currentUserPath())
    .then(response => dispatch(fetchCurrentUserSuccess(response)))
    .catch(error => dispatch(fetchCurrentUserFailure(error)));
};
