import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/auth";
import categorySlice from "./slices/category";
import subCategorySlice from "./slices/subCategory";
import productSlice from "./slices/product";

const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categorySlice,
    subCategory: subCategorySlice,
    product: productSlice,
  },
});

export default store;
