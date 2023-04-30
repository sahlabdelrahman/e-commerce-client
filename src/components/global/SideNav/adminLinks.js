import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";

export const adminLinks = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    keyForActive: "dashboard",
    icon: <DashboardOutlinedIcon />,
  },
  {
    path: "/admin/products",
    title: "Products",
    keyForActive: "products",
    icon: <ProductionQuantityLimitsOutlinedIcon />,
  },
  {
    path: "/admin/category",
    title: "Category",
    keyForActive: "category",
    icon: <Inventory2OutlinedIcon />,
  },
  {
    path: "/admin/subCategory",
    title: "Sub Category",
    keyForActive: "subCategory",
    icon: <CategoryOutlinedIcon />,
  },
  {
    path: "/admin/coupon",
    title: "Coupon",
    keyForActive: "coupon",
    icon: <DiscountOutlinedIcon />,
  },
];
