import { configureStore } from "@reduxjs/toolkit";
import moderatorsReducer from "./slices/moderators/moderatorsSlice";

export const store = configureStore({
  reducer: {
    moderators: moderatorsReducer,
  },
})