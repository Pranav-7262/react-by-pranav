import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  //configure the store
  reducer: todoReducer, //set of reducers , in this case, we have only one reducer
  //you can add more reducers by adding them to the object
  //e.g. reducer: { todo: todoReducer, user: userReducer }
});
