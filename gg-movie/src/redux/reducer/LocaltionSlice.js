import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LocaltionAPI from '../../api/Localtion'
export const handleCallLocation = createAsyncThunk(
  "movieVenue/fetchAllLocaltion",
  async (action) =>{
    const response = await LocaltionAPI.getAllLocaltion()
    return response
  }
)
const localtionSlice = createSlice({
  name: 'movieVenue',
  initialState: [],
  reducers: {},
  extraReducers : {
    [handleCallLocation.fulfilled] : (state,action) =>{
      state = action.payload
      return state
    }
  }
})
const {reducer } = localtionSlice;
export default reducer