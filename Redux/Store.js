// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import selectedReducer from "./Selected";

export const store = configureStore({
  reducer: {
    selected: selectedReducer, // Add your reducers here
  },
});

export default store;
