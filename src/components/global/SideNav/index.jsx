import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/compat/app";

import {
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import Menu from "./Menu";

import "./SideNav.scss";

import { logout } from "../../../store/actions/auth";

const SideNav = ({ toggleMenu, handleToggleMenu, mobileOpen, links }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const image = JSON.parse(
  //   localStorage.getItem("image") || sessionStorage.getItem("image")
  // );
  const { name, isLoading } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div
      className={`sideNav ${toggleMenu ? "activeMenu" : ""} ${
        mobileOpen ? "mobileOpen" : ""
      }`}
    >
      <div className="toggleMenu" onClick={handleToggleMenu}>
        <MenuIcon fontSize="small" />
      </div>
      <div className="logo">
        <Link to={"/"}>
          <ShoppingCartOutlinedIcon
            fontSize="large"
            sx={{ marginRight: "10px" }}
          />
          E-Commerce
        </Link>
      </div>
      <Link to={"/dashboard/profile"} className="info">
        <div className="imgContainer">
          <img
            // src={image ? image["512px"] : "/assets/images/Avatar.png"}
            src={"/assets/images/Avatar.png"}
            alt="Profile"
          />
        </div>

        <h4>
          {name ? name : ""}
          {/* {localStorage.getItem("name") === null
            ? sessionStorage.getItem("name")
            : localStorage.getItem("name")} */}
        </h4>
      </Link>
      <Menu items={links} />
      <List sx={{ marginTop: "50px" }}>
        <Link
          className={pathname.split("/")[2] === "profile" ? "activeLink" : ""}
          to="/dashboard/profile"
        >
          <ListItem button>
            <ListItemIcon>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>

        <ListItem button onClick={handleLogout}>
          {isLoading ? (
            <ListItemIcon>
              <CircularProgress size={24} color="inherit" />
            </ListItemIcon>
          ) : (
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
          )}

          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};

export default SideNav;
