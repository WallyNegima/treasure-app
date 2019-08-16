import { createStore, applyMiddleware } from "redux";

import reduxThunk from "redux-thunk";
import reducer from "./ducks";

// const store = createStore(reducer, applyMiddleware(reduxThunk, ...middlewares));
const store = createStore(reducer, applyMiddleware(reduxThunk));

function configureStore() {
  return store;
}

export default configureStore;
