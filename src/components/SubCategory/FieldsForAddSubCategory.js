import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../Form/Input";
import { SelectInput } from "../Form/Select";

import {
  category_validation,
  sub_category_name_validation,
} from "../../utils/inputValidations/subCategory";

import { getCategories } from "../../store/actions/category";

export default function FieldsForAddSubCategory() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const options = data?.map((option) => ({
    value: option?._id,
    label: option?.name,
  }));

  return (
    <div>
      {options?.length > 0 ? (
        <>
          <SelectInput {...category_validation} options={options} value="" />
          <Input {...sub_category_name_validation} />
        </>
      ) : (
        <p>There must be a category exists to add sub category</p>
      )}
    </div>
  );
}
