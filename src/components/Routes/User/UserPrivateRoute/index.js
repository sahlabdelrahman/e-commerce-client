import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import SideNav from "../../../global/SideNav";
import { userLinks } from "../../../global/SideNav/userLinks";
import Navbar from "../../../global/Navbar";
import { Box, Drawer } from "@mui/material";

import "./index.scss";

// import LoadingToRedirect from "../../LoadingToRedirect";

const UserPrivateRoute = () => {
  const user = useSelector((state) => state.auth);
  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!user || !user.token) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);
  console.log("user ", user);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = (e) => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <div className="mainLayout">
      <Navbar
        handleToggleMenu={handleToggleMenu}
        toggleMenu={toggleMenu}
        handleDrawerToggle={handleDrawerToggle}
      />
      <SideNav
        handleToggleMenu={handleToggleMenu}
        toggleMenu={toggleMenu}
        links={userLinks}
      />
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          <SideNav
            handleToggleMenu={handleToggleMenu}
            toggleMenu={toggleMenu}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Drawer>
      </Box>
      <main className={`${toggleMenu ? "toggleMenu" : ""}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default UserPrivateRoute;
