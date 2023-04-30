import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import {
  getSubCategories,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
} from "../actions/subCategory";

const initialState = {
  data: null,
  isLoading: false,
  isLoadingForAction: false,
  error: null,
};

const subCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {},
  extraReducers: {
    [getSubCategories.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getSubCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [getSubCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [createSubCategory.pending]: (state) => {
      state.isLoadingForAction = true;
      state.error = null;
    },
    [createSubCategory.fulfilled]: (state, { payload }) => {
      state.isLoadingForAction = false;
      toast.success(`'${payload?.name}' added successfully`);
      state.data = [payload, ...state?.data];
    },
    [createSubCategory.rejected]: (state, { payload }) => {
      state.isLoadingForAction = false;
      state.error = payload;
      toast.error(state.error);
    },

    [updateSubCategory.pending]: (state) => {
      state.isLoadingForAction = true;
      state.error = null;
    },
    [updateSubCategory.fulfilled]: (state, { payload }) => {
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
    [updateSubCategory.rejected]: (state, { payload }) => {
      state.isLoadingForAction = false;
      state.error = payload;
      toast.error(state.error);
    },
    [deleteSubCategory.pending]: (state) => {
      state.isLoadingForAction = true;
      state.error = null;
    },
    [deleteSubCategory.fulfilled]: (state, { payload }) => {
      state.isLoadingForAction = false;
      toast.success(`'${payload?.data?.name}' Deleted successfully.`);
      state.data = [
        ...state.data?.filter((item) => item?.slug !== payload?.slug),
      ];
    },
    [deleteSubCategory.rejected]: (state, { payload }) => {
      state.isLoadingForAction = false;
      state.error = payload;
      toast.error(state.error);
    },
  },
});

export default subCategorySlice.reducer;
