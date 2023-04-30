export const category_name_validation = {
  name: "category_name",
  label: "category name",
  id: "category_name",
  placeholder: "Category name",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 2,
      message: "To short '2 characters min'",
    },
    maxLength: {
      value: 32,
      message: "To long '32 characters max'",
    },
  },
};
