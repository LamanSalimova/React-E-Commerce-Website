import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = response.json();
  return data;
});

export const getProductDetail = createAsyncThunk(
  "getProductDetail",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = response.json();
    return data;
  }
);

export const getProductCategory = createAsyncThunk(
  "getProductCategory",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      })
      .addCase(getProductDetail.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL;
      })
      .addCase(getProductCategory.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProductCategory.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProductCategory.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer;
