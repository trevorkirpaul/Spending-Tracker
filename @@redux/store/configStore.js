import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import R from 'ramda';

import rootReducer from '../reducers';
import enahncer from './enhancers';

const persistenceConfig = {
  key: 'persist',
  storage
}

export default () => {
  const store = createStore(
    persistReducer(persistenceConfig, rootReducer, enahncer),
    {},
    enhancer
  );

  const persistor = persistStore(store);

  if (__DEV__) {
    console.log('ataching helpers (state, storage) to global');
    global.state = store.getState();
    global.storage = initial;
		global.persistor = persistor;
		global.storage.reset = () => Promise.all([
			global.persistor.purge(),
			global.persistor.persist()
		]);
		global.R = R;
  }

  if (module.hot) {
		module.hot.accept(() => {
			const nextRootReducer = require('@redux/reducers').default;
			store.replaceReducer(nextRootReducer);
		});
  }
  
  return { store, persistor }

}