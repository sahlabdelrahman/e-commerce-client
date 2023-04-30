import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

import {
  Box,
  // CircularProgress,
  MenuItem,
  Typography,
  Avatar,
  Menu,
  IconButton,
  // Tooltip,
  CircularProgress,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

// import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";

import { logout } from "../../../store/actions/auth";

import "./index.scss";

export default function Navbar({
  toggleMenu,
  handleToggleMenu,
  // handleDrawerToggle,
}) {
  // const image = JSON.parse(
  //   localStorage.getItem("image") || sessionStorage.getItem("image")
  // );

  const { role, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [toggleSearch, setToggleSearch] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleSearch = () => {
    setToggleSearch(!toggleSearch);
  };

  const handleLogout = async () => {
    await firebase.auth().signOut();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={`navbar-component ${toggleMenu ? "activeMenu" : ""}`}>
      <div className="toggleMenu" onClick={handleToggleMenu}>
        <MenuIcon fontSize="small" />
      </div>
      {/* <div className="actions">
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className="drawerButton"
        >
          <MenuIcon />
        </IconButton>
        <Tooltip title={"Show guide"} className="tooltipForResponsive">
          <IconButton>
            <HelpOutlineIcon fontSize="medium" />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Turn Dark/Light"} className="tooltipForResponsive">
          <IconButton>
            <LightbulbOutlinedIcon fontSize="medium" />
          </IconButton>
        </Tooltip>
      </div> */}
      <div className="content">
        <div
          onClick={handleToggleSearch}
          className={`searchInput ${toggleSearch ? "active" : ""}`}
        >
          <SearchIcon fontSize="small" />
          <input placeholder="Search" type="text" />
        </div>
        <Box sx={{ flexGrow: 0 }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt="Avatar"
              // src={image ? image["512px"] : "/assets/images/Avatar.png"}
              src={"/assets/images/Avatar.png"}
            />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            className="menuAppBarContainer"
          >
            <div className="menuAppBar">
              <MenuItem onClick={handleCloseUserMenu}>
                {role === "subscriber" && (
                  <Link style={{ textDecoration: "none" }} to="/user/history">
                    Dashboard
                  </Link>
                )}
                {role === "admin" && (
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/admin/dashboard"
                  >
                    Dashboard
                  </Link>
                )}
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to="/dashboard/profile">
                  <Typography textAlign="center">Profile</Typography>
                </Link>
              </MenuItem>
              <MenuItem sx={{ textAlign: "center" }}>
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  <Typography textAlign="center" onClick={handleLogout}>
                    Logout
                  </Typography>
                )}
              </MenuItem>
            </div>
          </Menu>
        </Box>
      </div>
    </div>
  );
}
