import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from '../types';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: payload,
        error: '',
      };

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: payload,
      };

    default:
      return state;
  }
};
