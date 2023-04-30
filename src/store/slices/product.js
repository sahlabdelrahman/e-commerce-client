import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../actions/product";

const initialState = {
  data: null,
  isLoading: false,
  isLoadingForAction: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [createProduct.pending]: (state) => {
      state.isLoadingForAction = true;
      state.error = null;
    },
    [createProduct.fulfilled]: (state, { payload }) => {
      state.isLoadingForAction = false;
      toast.success(`'${payload?.title}' added successfully`);
      state.data = [payload, ...state?.data];
    },
    [createProduct.rejected]: (state, { payload }) => {
      state.isLoadingForAction = false;
      state.error = payload;
      toast.error(state.error);
    },

    [updateProduct.pending]: (state) => {
      state.isLoadingForAction = true;
      state.error = null;
    },
    [updateProduct.fulfilled]: (state, { payload }) => {
      state.isLoadingForAction = false;
      toast.success(`'${payload?.title}' Updated successfully`);
      state.data = state.data?.map((category) => {
        if (category.slug === payload?.oldSlug) {
          return payload;
        } else {
          return category;
        }
      });
    },
    [updateProduct.rejected]: (state, { payload }) => {
      state.isLoadingForAction = false;
      state.error = payload;
      toast.error(state.error);
    },
    [deleteProduct.pending]: (state) => {
      state.isLoadingForAction = true;
      state.error = null;
    },
    [deleteProduct.fulfilled]: (state, { payload }) => {
      state.isLoadingForAction = false;
      toast.success(`'${payload?.data?.name}' Deleted successfully.`);
      state.data = [
        ...state.data?.filter((item) => item?.slug !== payload?.slug),
      ];
    },
    [deleteProduct.rejected]: (state, { payload }) => {
      state.isLoadingForAction = false;
      state.error = payload;
      toast.error(state.error);
    },
  },
});

export default productSlice.reducer;
