import { createAsyncThunk } from "@reduxjs/toolkit";
import CategoryServices from "../../services/category.services";

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await CategoryServices.getAllCategories();
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

export const getSubCategories = createAsyncThunk(
  "category/getSubCategories",
  async (_id, { rejectWithValue }) => {
    try {
      const res = await CategoryServices.getSubCategories(_id);
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

export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (data, { rejectWithValue }) => {
    try {
      const res = await CategoryServices.createCategory(
        data?.token,
        data?.category_name
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

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async (data, { rejectWithValue }) => {
    try {
      const res = await CategoryServices.updateCategory(
        data?.token,
        data?.slug,
        data?.name
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

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (data, { rejectWithValue }) => {
    try {
      const res = await CategoryServices.deleteCategory(
        data?.token,
        data?.slug
      );
      return { ...res?.data, slug: data?.slug };
    } catch (error) {
      if (error?.response && error?.response?.data)
        return rejectWithValue(error?.response?.data);
      else {
        return rejectWithValue(error?.message);
      }
    }
  }
);
