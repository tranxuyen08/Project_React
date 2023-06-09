import { createSlice } from "@reduxjs/toolkit";

const updateSlice = createSlice({
  name: "user",
  initialState: true,
  reducers: {
    updateHeader: (state, action) => {
      state = !state
      return state
    }
  }
})
const { reducer, actions } = updateSlice;
export const { updateHeader } = actions;
export default reducer