import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import CONSTANTS from '../actions';
import { URI_USERS } from '../../config';

const { USER } = CONSTANTS;

function* createUser(action) {
  try {
    const user = yield call(axios.post, URI_USERS, { ...action.user })
    yield put({
      type: USER.CREATE_SUCCESS,
      loading: false,
      isLoaded: true,
      error: false,
      data: user.data
    })
  } catch (e) {
    yield put({
      type: USER.CREATE_FAILURE,
      loading: false,
      isLoaded: true,
      error: true,
      data: null,
    })
  }
}

export function* startCreateUser() {
  yield takeLatest(USER.CREATE, createUser);
}

