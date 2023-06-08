import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ListOrdersAPI from "../../api/ListOrder";

export const callListOrdersAPI = createAsyncThunk(

  "listOrders/fetchAllListOrders",
  async (action) => {
    const response = await ListOrdersAPI.getListOrders()
    return response
  }
)
export const listOrdersSlice = createSlice({
  name: 'listOrders',
  initialState: [],
  reducers: [],
  extraReducers: {
    [callListOrdersAPI.fulfilled]: (state, action) => {
      state = action.payload
      return state
    }
  }
})

const { reducer } = listOrdersSlice;
export default reducer