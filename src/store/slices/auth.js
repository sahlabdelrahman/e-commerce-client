import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "../actions/auth";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  token: "",
  email: "",
  name: "",
  role: "",
  _id: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // login
    [login.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload?.token;
      state.email = payload?.email;
      state.name = payload?.name;
      state.role = payload?.role;
      state._id = payload?._id;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    // logout
    [logout.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled]: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.token = "";
      state.email = "";
      state.name = "";
      state.role = "";
      state._id = "";
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
