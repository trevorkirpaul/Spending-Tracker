import CONSTANTS from '../actions';

const { USER } = CONSTANTS;

export const createUser = (user) => ({
  type: USER.CREATE,
  loading: true,
  data: null,
  error: false,
  isLoaded: false,
  user
})