import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByamount: (state, action) => {
      state.value += Number(action.payload); // Ensure the payload is treated as a number
    },
    resetvalue: (state) => {
      state.value = 0;
    },
  },
});
export const { increment, decrement, incrementByamount, resetvalue } =
  counterSlice.actions;
export default counterSlice.reducer;
// The counterSlice is created with an initial state and three reducers: increment, decrement, and incrementByamount.
// The actions are exported for use in components, and the reducer is exported for use in the store configuration.
