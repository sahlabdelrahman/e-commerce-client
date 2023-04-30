import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthServices from "../../services/auth.service";

export const login = createAsyncThunk(
  "auth/login",
  async (token, { rejectWithValue }) => {
    try {
      const res = await AuthServices.createOrUpdateUser(token);
      return { ...res?.data, token };
    } catch (error) {
      if (error?.response && error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      }

      if (error?.response?.status === 422 || 401) {
        return rejectWithValue("Incorrect Email or Password");
      }
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    return true;
    // try {
    //   // const res = await ApiConfig.get("/auth/api/logout");
    //   // return res?.data;
    // } catch (error) {
    //   if (error?.response && error?.response?.data?.message) {
    //     return rejectWithValue(error?.response?.data?.message);
    //   }
    //   return rejectWithValue(error?.message);
    // }
  }
);
