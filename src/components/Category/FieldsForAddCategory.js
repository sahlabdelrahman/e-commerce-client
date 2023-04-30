import { Input } from "../Form/Input";

import { category_name_validation } from "../../utils/inputValidations/category";

export default function FieldsForAddCategory() {
  return (
    <div>
      <Input {...category_name_validation} value="" />
    </div>
  );
}
