import { all } from 'redux-saga/effects';
import { startLogin } from './auth';
import { startCreateUser } from './userActions'

export default function* rootSaga() {
  yield all([
    startLogin(),
    startCreateUser(),
  ]);
}