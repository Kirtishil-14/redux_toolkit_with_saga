import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./catState";
import catSaga from "./catSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catReducer,
  },
  middleware: [saga],
});

saga.run(catSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
