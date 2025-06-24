import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";
const initialState = {
  snaps: localStorage.getItem("snaps")
    ? JSON.parse(localStorage.getItem("snaps"))
    : [],
};

export const snapSlice = createSlice({
  name: "snap",
  initialState,
  reducers: {
    addToSnaps: (state, action) => {
      const snap = action.payload;
      state.snaps.push(snap);
      localStorage.setItem("snaps", JSON.stringify(state.snaps));

      toast.success("Snap Created Successfully!", {
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "500",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
      });
    },
    updateToSnaps: (state, action) => {
      const snap = action.payload;
      const index = state.snaps.findIndex((item) => item._id === snap._id);

      if (index >= 0) {
        state.snaps[index] = snap;
        localStorage.setItem("snaps", JSON.stringify(state.snaps));
        toast.success("Snap updated");
      }
    },
    resetAllSnaps: (state, action) => {
      state.snaps = [];
      localStorage.removeItem("snaps");
    },
    removeFromSnaps: (state, action) => {
      const snap = action.payload;
      const index = state.snaps.findIndex((item) => item._id === snap);
      if (index >= 0) {
        state.snaps.splice(index, 1);
        localStorage.setItem("snaps", JSON.stringify(state.snaps));
        toast.success("Snap deleted");
      }
    },
  },
});

export const { addToSnaps, updateToSnaps, resetAllSnaps, removeFromSnaps } =
  snapSlice.actions;

export default snapSlice.reducer;
