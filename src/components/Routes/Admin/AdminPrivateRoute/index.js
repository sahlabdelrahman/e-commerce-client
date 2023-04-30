import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Drawer } from "@mui/material";

import Navbar from "../../../global/Navbar";
import SideNav from "../../../global/SideNav";
import { adminLinks } from "../../../global/SideNav/adminLinks";

import AuthServices from "../../../../services/auth.service";

import "./index.scss";

// import LoadingToRedirect from "../../LoadingToRedirect";

const AdminPrivateRoute = () => {
  const user = useSelector((state) => state.auth);
  let navigate = useNavigate();

  useEffect(() => {
    if (user && user.token) {
      AuthServices.currentAdmin(user.token)
        .then(() => {
          // console.log(res);
        })
        .catch((error) => {
          navigate("/");
          console.log(error);
        });
    }
  }, [user, navigate]);

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
        links={adminLinks}
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

export default AdminPrivateRoute;
