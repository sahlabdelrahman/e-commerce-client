import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

export const userLinks = [
  {
    title: "History",
    path: "/user/history",
    keyForActive: "history",
    icon: <HistoryOutlinedIcon />,
  },
  {
    path: "/user/wishlist",
    title: "Wishlist",
    keyForActive: "wishlist",
    icon: <FormatListBulletedOutlinedIcon />,
  },
];
