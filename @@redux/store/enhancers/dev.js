import { applyMiddleware, compose } from 'redux';
import { propOr } from 'ramda';

const devtoolEnhancer = propOr(compose, '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__')(window);

const enhancer = devtoolEnhancer;

export default enhancer;