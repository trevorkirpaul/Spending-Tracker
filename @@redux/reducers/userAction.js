import CONSTANTS from '../actions';

const { USER } = CONSTANTS;
const initState = {
  loading: false,
  isLoaded: true,
  data: null,
  error: false,
}

export default (state = initState, action) => {
  switch (action.type) {
    case USER.CREATE:
      return {
        loading: action.loading,
        data: action.user,
        error: action.data,
        isLoaded: action.isLoaded,
      };
    case USER.CREATE_SUCCESS:
      return {
        loading: action.loading,
        data: action.data,
        error: action.error,
        isLoaded: action.isLoaded
      };
    case USER.CREATE_FAILURE:
      return {
        loading: action.loading,
        data: action.data,
        error: action.error,
        isLoaded: action.isLoaded
      }
    default:
      return state;
  }
}