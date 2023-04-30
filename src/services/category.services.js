import ApiConfig from "./apiConfig";

const getAllCategories = async () => {
  return await ApiConfig.get("/categories");
};

const getSubCategories = async (_id) => {
  return await ApiConfig.get(`/category/subCategories/${_id}`);
};

const getCategory = async (slug) => {
  return await ApiConfig.get(`/category/${slug}`);
};

const createCategory = async (authtoken, name) => {
  return await ApiConfig.post(
    `/category`,
    { name },
    {
      headers: {
        authtoken,
      },
    }
  );
};

const deleteCategory = async (authtoken, slug) => {
  return await ApiConfig.delete(`/category/${slug}`, {
    headers: {
      authtoken,
    },
  });
};

const updateCategory = async (authtoken, slug, name) => {
  return await ApiConfig.put(
    `/category/${slug}`,
    { name },
    {
      headers: {
        authtoken,
      },
    }
  );
};

const CategoryServices = {
  getAllCategories,
  getSubCategories,
  getCategory,
  deleteCategory,
  updateCategory,
  createCategory,
};

export default CategoryServices;
