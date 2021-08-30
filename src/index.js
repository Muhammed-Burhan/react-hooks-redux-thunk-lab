import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import catReducer from "./features/cats/catsSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const Store = createStore(catReducer, composedEnhancer);
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
