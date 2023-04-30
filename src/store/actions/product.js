import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductServices from "../../services/product.services";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await ProductServices.getProducts();
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

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data, { rejectWithValue }) => {
    try {
      const res = await ProductServices.createProduct(data?.token, data);
      return res?.data;
    } catch (error) {
      if (error?.response && error?.response?.data)
        return rejectWithValue(error?.response?.data?.error);
      else {
        return rejectWithValue(error?.message);
      }
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data, { rejectWithValue }) => {
    try {
      const res = await ProductServices.updateProduct(
        data?.token,
        data?.slug,
        data
      );
      return { ...res?.data, oldSlug: data?.slug };
    } catch (error) {
      if (error?.response && error?.response?.data)
        return rejectWithValue(error?.response?.data?.error);
      else {
        return rejectWithValue(error?.message);
      }
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (data, { rejectWithValue }) => {
    try {
      const res = await ProductServices.deleteProduct(data?.token, data?.slug);
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
