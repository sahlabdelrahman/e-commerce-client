import { useSelector } from "react-redux";

import SubCategoryColumns from "../../../components/SubCategory/SubCategoryColumns";
import FieldsForAddSubCategory from "../../../components/SubCategory/FieldsForAddSubCategory";
import FieldsForEditSubCategory from "../../../components/SubCategory/FieldsForEditSubCategory";

import {
  getSubCategories,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
} from "../../../store/actions/subCategory";

import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

export default function SubCategoryRoute() {
  const { isLoading, isLoadingForAction, data } = useSelector(
    (state) => state?.subCategory
  );

  return {
    path: "subCategory",
    pageName: "subCategory",
    apiCall: getSubCategories,
    apiCallForAdd: createSubCategory,
    apiCallForEdit: updateSubCategory,
    apiCallForDelete: deleteSubCategory,
    isLoadingForAction,
    isLoading,
    title: "Sub Categories",
    Icon: CategoryOutlinedIcon,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor",
    tableTitle: "Sub category table",
    data,
    tableColumns: SubCategoryColumns,
    FieldsForAdd: FieldsForAddSubCategory,
    FieldsForEdit: FieldsForEditSubCategory,
  };
}
