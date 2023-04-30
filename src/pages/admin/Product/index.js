import { useSelector } from "react-redux";

import ProductColumns from "../../../components/Product/ProductColumns";
import FieldsForAddProduct from "../../../components/Product/FieldsForAddProduct";
import FieldsForEditProduct from "../../../components/Product/FieldsForEditProduct";

import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";

import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../../store/actions/product";

export default function ProductRoute() {
  const { isLoading, isLoadingForAction, data } = useSelector(
    (state) => state?.product
  );

  return {
    path: "products",
    pageName: "products",
    apiCall: getProducts,
    apiCallForAdd: createProduct,
    apiCallForEdit: updateProduct,
    apiCallForDelete: deleteProduct,
    isLoadingForAction,
    isLoading,
    title: "Products",
    Icon: ProductionQuantityLimitsOutlinedIcon,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor",
    tableTitle: "Product table",
    data,
    tableColumns: ProductColumns,
    FieldsForAdd: FieldsForAddProduct,
    FieldsForEdit: FieldsForEditProduct,
    selectDependToAnother: true,
  };
}
