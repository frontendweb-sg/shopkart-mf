const combineReducer = (reducers) => (state, action) => {
  return Object.keys(reducers).reduce((acc, next) => ({}), state);
};
