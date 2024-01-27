import reducers from "./reducers";
//import thunk from "redux-thunk";
// import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: reducers,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(thunk as any),
});
