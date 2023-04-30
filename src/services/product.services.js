import ApiConfig from "./apiConfig";

const getProducts = async () => {
  return await ApiConfig.get("/products/100");
};

const getProduct = async (slug) => {
  return await ApiConfig.get(`/product/${slug}`);
};

const createProduct = async (authtoken, data) => {
  return await ApiConfig.post(
    `/product`,
    data,
    // { ...data, price: +data?.price, quantity: +data?.quantity },
    {
      headers: {
        authtoken,
      },
    }
  );
};

const deleteProduct = async (authtoken, slug) => {
  return await ApiConfig.delete(`/product/${slug}`, {
    headers: {
      authtoken,
    },
  });
};

const updateProduct = async (authtoken, slug, data) => {
  return await ApiConfig.put(`/product/${slug}`, data, {
    headers: {
      authtoken,
    },
  });
};

const ProductServices = {
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProduct,
};

export default ProductServices;
