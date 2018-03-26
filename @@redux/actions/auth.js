import CONSTANTS from '../actions';

const { AUTH } = CONSTANTS;

export const startLogin = user => ({
  type: AUTH.LOGIN,
  loading: true,
  isLoggedIn: false,
  token: null,
  error: false,
  auth: false,
  user
})
