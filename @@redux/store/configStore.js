import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import auth from '../reducers/auth';
import saga from '../sagas/rootSaga';

const sagaMW = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({ auth }),
    composeEnhancers(applyMiddleware(sagaMW))
  );

  sagaMW.run(saga);
  
  return store;

}