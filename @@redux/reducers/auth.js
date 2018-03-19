import { propOr, merge, path } from 'ramda';
import { PURGE, REHYDRATE } from 'redux-persist/lib/constants';

import CONSTANTS from '../actions'

const { AUTH } = CONSTANTS;

const initialState = {
  isLoggedIn: false,
  token: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case AUTH.LOGIN_SUCCESS:
      return merge (state, {
        isLoggedIn: true,
      });
    case AUTH.LOGOUT:
      return merge(state, { isLoggedIn: false, token: null })
    default:
      return state;
  }
}