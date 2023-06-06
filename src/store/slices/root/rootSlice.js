import { createSlice } from "@reduxjs/toolkit";
import { ROOT } from "@/mock/index";

const initialState = {
  roots: ROOT,
  error: null,
  status: null,
};

const nameSlice = "root"

export const rootSlice = createSlice({
  name: nameSlice,
  initialState,
  reducers: {},
});

export const {} = rootSlice.actions;

export default rootSlice.reducer;