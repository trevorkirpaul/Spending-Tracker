import CONSTANTS from '../actions';

const { AUTH } = CONSTANTS;

export const startLogin = () => ({
  type: AUTH.LOGIN,
  loading: true,
  isLoggedIn: false
})
