const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  couter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Reducer

// Dispatching Action

// Subscription
