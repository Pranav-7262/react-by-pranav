import { configureStore } from "@reduxjs/toolkit";
import snapReducer from "../redux/snapSlice";
export const store = configureStore({
  reducer: {
    snap: snapReducer,
  },
});
