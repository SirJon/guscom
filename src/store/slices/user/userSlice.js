import { createSlice } from "@reduxjs/toolkit";
import { USER } from "@/mock";
import { USER_STATUS } from "@/constants";

const initialState = {
  user: {},
  error: null,
  status: USER_STATUS.status.logout,
};

const nameSlice = "user"

export const userSlice = createSlice({
  name: nameSlice,
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const isValid = payload.email === USER.email && payload.password === USER.password;
      if (isValid) {
        state.status = USER_STATUS.status.login;
        state.user = USER;
      }
    },
    logout: (state) => {
      state.user = {};
      state.status = USER_STATUS.status.logout;
    }
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;