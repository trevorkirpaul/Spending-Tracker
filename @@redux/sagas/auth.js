import axios from 'axios';
import CONSTANTS from '../actions'
import { URI_TOKEN } from '../../config'

const { AUTH } = CONSTANTS;

import { call, put, takeLatest } from 'redux-saga/effects';

function* logIn(action) {
  try {
    const token = yield call(axios.post, URI_TOKEN, { auth: {...action.user} })
    yield put({
      type: AUTH.LOGIN_SUCCESS,
      loading: false,
      isLoaded: true,
      error: false,
      auth: true,
      token: token.data.jwt
    })
  } catch (e) {
    yield put({
      type: AUTH.LOGIN_FAILURE,
      loading: false,
      isLoaded: true,
      error: true,
      auth: false,
      token: null,
      e
    })
  }
}

export function* startLogin() {
  yield takeLatest(AUTH.LOGIN, logIn);
}