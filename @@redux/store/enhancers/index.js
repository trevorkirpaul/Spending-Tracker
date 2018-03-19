let enhancer;

if (__DEV__) {
  enhancer = require('./dev').default;
}

export default enhancer;