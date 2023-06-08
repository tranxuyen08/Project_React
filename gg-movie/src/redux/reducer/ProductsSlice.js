import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductsAPI from "../../api/ProductAPI";

export const callProductsAPI = createAsyncThunk(
  "products/fetchAllProduct",
  async (action) => {
    const response = await ProductsAPI.getAllProducts()
    return response
  }
)
export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: [],
  extraReducers: {
    [callProductsAPI.fulfilled] : (state,action) =>{
      state = action.payload
      return state
    }
  }
})

const {reducer } = productsSlice;
export default reducer