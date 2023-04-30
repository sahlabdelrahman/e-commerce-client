import { createAsyncThunk } from "@reduxjs/toolkit";

import SubCategoryServices from "../../services/subCategory.services";

export const getSubCategories = createAsyncThunk(
  "subCategory/getSubCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await SubCategoryServices.getSubCategories();
      return res?.data;
    } catch (error) {
      if (error?.response && error?.response?.data)
        return rejectWithValue(error?.response?.data);
      else {
        return rejectWithValue(error?.message);
      }
    }
  }
);

export const createSubCategory = createAsyncThunk(
  "subCategory/createSubCategory",
  async (data, { rejectWithValue }) => {
    try {
      const res = await SubCategoryServices.createSubCategory(
        data?.token,
        data?.category,
        data?.name
      );
      return res?.data;
    } catch (error) {
      if (error?.response && error?.response?.data)
        return rejectWithValue(error?.response?.data);
      else {
        return rejectWithValue(error?.message);
      }
    }
  }
);

export const updateSubCategory = createAsyncThunk(
  "subCategory/updateSubCategory",
  async (data, { rejectWithValue }) => {
    try {
      const res = await SubCategoryServices.updateSubCategory(
        data?.token,
        data?.slug,
        data?.name,
        data?.category
      );
      return { ...res?.data, oldSlug: data?.slug };
    } catch (error) {
      if (error?.response && error?.response?.data)
        return rejectWithValue(error?.response?.data);
      else {
        return rejectWithValue(error?.message);
      }
    }
  }
);

export const deleteSubCategory = createAsyncThunk(
  "subCategory/deleteSubCategory",
  async (data, { rejectWithValue }) => {
    try {
      const res = await SubCategoryServices.deleteSubCategory(
        data?.token,
        data?.slug
      );
      return { data: res?.data, slug: data?.slug };
    } catch (error) {
      if (error?.response && error?.response?.data)
        return rejectWithValue(error?.response?.data);
      else {
        return rejectWithValue(error?.message);
      }
    }
  }
);
