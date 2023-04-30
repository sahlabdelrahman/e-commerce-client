export const sub_category_name_validation = {
  name: "name",
  label: "sub category name",
  id: "sub_category",
  placeholder: "Sub category name",
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

export const category_validation = {
  name: "category",
  label: "category",
  id: "category",
  placeholder: "Category",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
  // options: [
  //   { label: "Monday", value: "monday" },
  //   { label: "Tuesday", value: "tuesday" },
  //   { label: "Wednesday", value: "wednesday" },
  //   { label: "Thursday", value: "thursday" },
  //   { label: "Friday", value: "friday" },
  //   { label: "Saturday", value: "saturday" },
  //   { label: "Sunday", value: "sunday" },
  // ],
};
