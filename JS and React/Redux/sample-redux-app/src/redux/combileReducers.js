import { createStore, combineReducers } from "redux";

// reduce 1

const user = (state = null, action) => {
  switch (action.type) {
    case "name":
      return action.payload.name;

    default:
      return state;
  }
};

//reducer 2

const cart = (state = null, action) => {
  switch (action.type) {
    case "item":
      return action.payload.name;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
  cart,
});

const store = createStore(rootReducer);

// just sample code
