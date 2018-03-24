import { all } from 'redux-saga/effects';
import { startLogin } from './auth';

export default function* rootSaga() {
  yield all([startLogin()]);
}