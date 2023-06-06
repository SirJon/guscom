import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/userSlice";
import moderatorsReducer from "./slices/moderators/moderatorsSlice";
import rootReducer from "./slices/root/rootSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    moderators: moderatorsReducer,
    root: rootReducer,
  },
})