export const title_validation = {
  name: "title",
  label: "title",
  id: "product_title",
  placeholder: "Title",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 32,
      message: "To long '32 characters max'",
    },
  },
};

export const description_validation = {
  name: "description",
  label: "description",
  id: "product_description",
  placeholder: "Description",
  multiline: true,
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 2000,
      message: "To long '2000 characters max'",
    },
  },
};

export const price_validation = {
  name: "price",
  label: "price",
  id: "product_price",
  placeholder: "Price",
  type: "number",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 32,
      message: "To long '32 characters max'",
    },
  },
};

export const quantity_validation = {
  name: "quantity",
  label: "quantity",
  id: "product_quantity",
  placeholder: "Quantity",
  type: "number",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const brand_validation = {
  name: "brand",
  label: "brand",
  id: "product_brand",
  placeholder: "Brand",
  validation: {},
};

export const shipping_validation = {
  name: "shipping",
  label: "shipping",
  id: "shipping",
  placeholder: "Shipping",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
  options: [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ],
};

export const color_validation = {
  name: "color",
  label: "color",
  id: "color",
  placeholder: "Color",
  validation: {},
  options: [
    { label: "Black", value: "Black" },
    { label: "Brown", value: "Brown" },
    { label: "Silver", value: "Silver" },
    { label: "White", value: "White" },
    { label: "Blue", value: "Blue" },
  ],
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
};

export const sub_category_validation = {
  name: "subCategory",
  label: "sub category",
  id: "sub_category",
  placeholder: "Sub category",
  multiple: true,
  validation: {},
};

export const images_validation = {
  name: "images",
  label: "images",
  id: "product_images",
  placeholder: "images",
  validation: {},
};
