import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Input } from "../Form/Input";
import { SelectInput } from "../Form/Select";

import { getCategories } from "../../store/actions/category";
import {
  category_validation,
  sub_category_name_validation,
} from "../../utils/inputValidations/subCategory";

export default function FieldsForEditSubCategory({ data }) {
  const dispatch = useDispatch();
  const { data: categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const options = categories?.map((option) => ({
    value: option?._id,
    label: option?.name,
  }));
  return (
    <div>
      <SelectInput
        {...category_validation}
        options={options}
        value={data?.category?._id}
      />
      <Input {...sub_category_name_validation} value={data?.name} />
    </div>
  );
}
