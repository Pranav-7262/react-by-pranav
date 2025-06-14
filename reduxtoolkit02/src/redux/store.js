import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer, //counter is the key for the counter slice reducer
  },
});
// The store is configured with an empty reducer for now.
