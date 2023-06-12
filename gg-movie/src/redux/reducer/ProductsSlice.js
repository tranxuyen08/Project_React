import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductsAPI from "../../api/ProductAPI";

export const callProductsAPI = createAsyncThunk(
  "products/fetchAllProduct",
  async (action) => {
    const response = await ProductsAPI.getAllProducts()
    return response
  }
)
export const postProductsAPI = createAsyncThunk(
  "products/postProduct",
  async (action) => {
    const response = await ProductsAPI.postProduct(action)
    return response
  }
)
export const handleUpdateProduct = createAsyncThunk(
  'products/updateProduct',
  async (action) =>{
    const response = await ProductsAPI.updateProduct(action)
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
    },
    [postProductsAPI.fulfilled] : (state,action) =>{
      state = [...state, action.payload]
      return state
    },
    [handleUpdateProduct.fulfilled] : (state,action) =>{
      const findIndex = state.findIndex((product) => product?.id == action.payload?.id)
      state[findIndex] = action.payload
      return state
    }
  }
})

const {reducer } = productsSlice;
export default reducer