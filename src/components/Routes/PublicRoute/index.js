import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "../../global/Header";

const PublicRoute = () => {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user?.token) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <Header />
      <Outlet />;
    </>
  );
};

export default PublicRoute;
