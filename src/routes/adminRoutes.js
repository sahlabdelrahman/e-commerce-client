import AdminDashboard from "../pages/admin/AdminDashboard";

import CategoryRoute from "../pages/admin/Category";
import SubCategoryRoute from "../pages/admin/SubCategory";
import ProductRoute from "../pages/admin/Product";

const adminRoutes = [{ path: "dashboard", element: <AdminDashboard /> }];

export function globalAdminRoutes() {
  return [CategoryRoute(), SubCategoryRoute(), ProductRoute()];
}

export default adminRoutes;
