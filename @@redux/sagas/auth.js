// import axios from 'axios';
import CONSTANTS from '../actions'

const { AUTH } = CONSTANTS;

import { call, put, takeLatest } from 'redux-saga/effects';

function* logIn(action) {
  try {
    // const auth = yield call()
    yield put({
      type: AUTH.LOGIN_SUCCESS,
      loading: false,
      isLoaded: true,
      error: false,
      auth: true
    })
  } catch (e) {
    yield put({
      type: AUTH.LOGIN_FAILURE,
      loading: false,
      isLoaded: true,
      error: true,
      auth: false
    })
  }
}

export function* startLogin() {
  yield takeLatest(AUTH.LOGIN, logIn);
}