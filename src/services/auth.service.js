import ApiConfig from "./apiConfig";

const createOrUpdateUser = async (authtoken) => {
  return await ApiConfig.post(
    "/create-or-update-user",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

const currentUser = async (authtoken) => {
  return await ApiConfig.post(
    "/current-user",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

const currentAdmin = async (authtoken) => {
  return await ApiConfig.post(
    "/current-admin",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

const AuthServices = {
  createOrUpdateUser,
  currentUser,
  currentAdmin,
};

export default AuthServices;
