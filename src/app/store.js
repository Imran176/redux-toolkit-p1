import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";

import pizzaReducer from "../features/pizza/pizzaSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import usersReducer from "../features/users/usersSlice";
import postReducer from "../features/posts/postSlice";

import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    icecream: icecreamReducer,
    users: usersReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
