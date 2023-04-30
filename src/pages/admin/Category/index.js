import { useSelector } from "react-redux";

import CategoryColumns from "../../../components/Category/CategoryColumns";
import FieldsForAddCategory from "../../../components/Category/FieldsForAddCategory";
import FieldsForEditCategory from "../../../components/Category/FieldsForEditCategory";

import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../../store/actions/category";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

export default function CategoryRoute() {
  const { isLoading, isLoadingForAction, data } = useSelector(
    (state) => state?.category
  );

  return {
    path: "category",
    pageName: "category",
    apiCall: getCategories,
    apiCallForAdd: createCategory,
    apiCallForEdit: updateCategory,
    apiCallForDelete: deleteCategory,
    isLoadingForAction,
    isLoading,
    title: "Categories",
    Icon: Inventory2OutlinedIcon,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor",
    tableTitle: "Category table",
    data,
    tableColumns: CategoryColumns,
    FieldsForAdd: FieldsForAddCategory,
    FieldsForEdit: FieldsForEditCategory,
  };
}
