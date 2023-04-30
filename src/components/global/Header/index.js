import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./Header.module.scss";
import { logout } from "../../../store/actions/auth";

const drawerWidth = 240;
const navItems = ["Home", "Shop", "Cart"];
const settings = ["Profile", "Account", "Logout"];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    await firebase.auth().signOut();
    dispatch(logout());
    navigate("/login");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Logo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className={styles["header"]}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{ background: "#fff", color: "#000", boxShadow: "none" }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ flex: 1 }}>
              <Link to="/">
                <Typography variant="h6" component="div">
                  Logo
                </Typography>
              </Link>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" }, flex: 1 }}>
              <ul className={styles["middleItems"]}>
                {navItems.map((item) => (
                  <li key={item}>
                    <Link to="/">{item}</Link>
                  </li>
                ))}
              </ul>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" }, flex: 1 }}>
              <ul className={styles["rightItems"]}>
                <li>
                  <input
                    type="text"
                    placeholder="Search Product"
                    className={styles["searchInput"]}
                  />
                </li>
                {!user?.token && (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                )}
                {user?.token && (
                  <li>
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar
                            alt="User"
                            src="/static/images/avatar/2.jpg"
                          />
                        </IconButton>
                      </Tooltip>
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
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          {user?.role === "subscriber" && (
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/user/history"
                            >
                              Dashboard
                            </Link>
                          )}
                          {user?.role === "admin" && (
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/admin/dashboard"
                            >
                              Dashboard
                            </Link>
                          )}
                        </MenuItem>
                        {settings.map((setting) => (
                          <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            {setting === "Logout" ? (
                              <Typography
                                textAlign="center"
                                onClick={handleLogout}
                              >
                                {setting}
                              </Typography>
                            ) : (
                              <Typography textAlign="center">
                                {setting}
                              </Typography>
                            )}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </li>
                )}
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </header>
  );
}

export default Header;
