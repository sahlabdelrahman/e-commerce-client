import ApiConfig from "./apiConfig";

const getSubCategories = async () => {
  return await ApiConfig.get("/subCategories");
};

const getSubCategory = async (slug) => {
  return await ApiConfig.get(`/subCategory/${slug}`);
};

const createSubCategory = async (authtoken, category, name) => {
  return await ApiConfig.post(
    `/subCategory`,
    { category, name },
    {
      headers: {
        authtoken,
      },
    }
  );
};

const updateSubCategory = async (authtoken, slug, name, category) => {
  return await ApiConfig.put(
    `/subCategory/${slug}`,
    { name, category },
    {
      headers: {
        authtoken,
      },
    }
  );
};

const deleteSubCategory = async (authtoken, slug) => {
  return await ApiConfig.delete(`/subCategory/${slug}`, {
    headers: {
      authtoken,
    },
  });
};

const SubCategoryServices = {
  getSubCategories,
  getSubCategory,
  createSubCategory,
  deleteSubCategory,
  updateSubCategory,
};

export default SubCategoryServices;
