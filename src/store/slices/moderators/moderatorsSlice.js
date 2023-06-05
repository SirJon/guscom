import { createSlice } from "@reduxjs/toolkit";
import { moderators } from "@/mock/index.js"

const initialState = {
  moderators: moderators.sort((a, b) => (a.id - b.id)),
  error: null,
  status: null,
  page: 1,
};

const nameSlice = "moderators"

export const moderatorsSlice = createSlice({
  name: nameSlice,
  initialState,
  reducers: {
    addModerators: (state, action) => {
      state.moderators.push(action.payload);
    },
    deleteModerators: (state, action) => {
      state.moderators.filter(it => it.id !== action.payload.id);
    },
    changeStatus: (state, { payload }) => {
      state.moderators = state.moderators.map(it => {
        return {
          ...it,
          status: it.id === payload.id ? payload.status : it.status
        }
      })
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
  }
});

export const { 
  addModerators, 
  deleteModerators, 
  changeStatus, 
  changePage 
} = moderatorsSlice.actions;

export default moderatorsSlice.reducer;