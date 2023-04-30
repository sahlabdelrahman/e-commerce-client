export const roleBasedRedirect = (role, navigate) => {
  if (role === "admin") {
    navigate("/admin/dashboard");
  } else {
    navigate("/user/history");
  }
};
