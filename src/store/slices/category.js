import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import {
  getCategories,
  getSubCategories,
  deleteCategory,
  createCategory,
  updateCategory,
} from "../actions/category";

const initialState = {
  data: null,
  subCategories: null,
  isLoading: false,
  isLoadingForSubCategories: false,
  isLoadingForAction: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.data = null;
      state.subCategories = null;
      state.isLoading = false;
      state.data = payload;
    },
    [getCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [getSubCategories.pending]: (state) => {
      state.isLoadingForSubCategories = true;
      state.error = null;
    },
    [getSubCategories.fulfilled]: (state, { payload }) => {
      state.isLoadingForSubCategories = false;
      state.subCategories = payload;
    },
    [getSubCategories.rejected]: (state, { payload }) => {
      state.isLoadingForSubCategories = false;
      state.error = payload;
    },

    [createCategory.pending]: (state) => {
      state.isLoadingForAction = true;
      state.error = null;
    },
    [createCategory.fulfilled]: (state, { payload }) => {
      state.isLoadingForAction = false;
      toast.success(`'${payload?.name}' added successfully`);
      state.data = [payload, ...state?.data];
    },
    [createCategory.rejected]: (state, { payload }) => {
      state.isLoadingForAction = false;
      state.error = payload;
      toast.error(state.error);
    },

    [updateCategory.pending]: (state) => {
      state.isLoadingForAction = true;
      state.error = null;
    },
    [updateCategory.fulfilled]: (state, { payload }) => {
      state.isLoadingForAction = false;
      toast.success(`'${payload?.name}' Updated successfully`);
      state.data = state.data?.map((category) => {
        if (category.slug === payload?.oldSlug) {
          return payload;
        } else {
          return category;
        }
      });
    },
    [updateCategory.rejected]: (state, { payload }) => {
      state.isLoadingForAction = false;
      state.error = payload;
      toast.error(state.error);
    },
    [deleteCategory.pending]: (state) => {
      state.isLoadingForAction = true;
      state.error = null;
    },
    [deleteCategory.fulfilled]: (state, { payload }) => {
      state.isLoadingForAction = false;
      toast.success(`'${payload?.name}' Deleted successfully.`);
      state.data = [
        ...state.data?.filter((item) => item?.slug !== payload?.slug),
      ];
    },
    [deleteCategory.rejected]: (state, { payload }) => {
      state.isLoadingForAction = false;
      state.error = payload;
      toast.error(state.error);
    },
  },
});

export default categorySlice.reducer;
