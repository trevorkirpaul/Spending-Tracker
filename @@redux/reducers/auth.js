import { propOr, merge, path } from 'ramda';
import { PURGE, REHYDRATE } from 'redux-persist/lib/constants';

import CONSTANTS from '../actions'

const { AUTH } = CONSTANTS;

const initialState = {
  isLoggedIn: false,
  token: null,
  loading: false,
  error: false,
  auth: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case AUTH.LOGIN: {
      return merge (state, {
        loading: action.loading,
        isLoggedIn: action.isLoggedIn,
        token: action.token,
        error: action.error,
        auth: action.auth,
      })
    }
    case AUTH.LOGIN_SUCCESS:
      return merge (state, {
        loading: action.loading,
        isLoggedIn: action.isLoggedIn,
        token: action.token,
        error: action.error,
        auth: action.auth,
      });
    case AUTH.LOGIN_FAILURE:
      return merge (state, {
        loading: action.loading,
        isLoggedIn: action.isLoggedIn,
        token: action.token,
        error: action.error,
        auth: action.auth,
      });
    case AUTH.LOGOUT:
      return merge(state, {
        loading: action.loading,
        isLoggedIn: action.isLoggedIn,
        token: action.token,
        error: action.error,
        auth: action.auth,
      })
    default:
      return state;
  }
}