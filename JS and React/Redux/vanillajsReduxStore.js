//  Initial State
const initialState = {
  counter: 0,
};

//  Reducer Function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

//  Create Store
const store = Redux.createStore(rootReducer);
