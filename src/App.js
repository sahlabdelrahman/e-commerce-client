import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { auth } from "./firebase";

import Home from "./pages/Home";

import PublicRoute from "./components/Routes/PublicRoute";
import UserPrivateRoute from "./components/Routes/User/UserPrivateRoute";
import AdminPrivateRoute from "./components/Routes/Admin/AdminPrivateRoute";

import GlobalForAdmin from "./pages/admin/Global";

import publicRoutes from "./routes/publicRoutes";
import userRoutes from "./routes/userRoutes";
import adminRoutes, { globalAdminRoutes } from "./routes/adminRoutes";

import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";
import { login } from "./store/actions/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        dispatch(login(idTokenResult.token));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* public routes */}
        <Route element={<PublicRoute />}>
          {publicRoutes.map((route, i) => (
            <Route path={route.path} element={route.element} key={i} />
          ))}
        </Route>

        {/* user routes */}
        <Route path="/user" element={<UserPrivateRoute />}>
          {userRoutes.map((route, i) => (
            <Route path={route.path} element={route.element} key={i} />
          ))}
        </Route>

        {/* admin routes */}
        <Route path="/admin" element={<AdminPrivateRoute />}>
          {adminRoutes.map((route, i) => (
            <Route path={route.path} element={route.element} key={i} />
          ))}
          {globalAdminRoutes().map(
            (
              {
                path,
                pageName,
                apiCall,
                apiCallForAdd,
                apiCallForDelete,
                apiCallForEdit,
                isLoading,
                isLoadingForAction,
                title,
                Icon,
                description,
                tableTitle,
                data,
                tableColumns,
                FieldsForEdit,
                FieldsForAdd,
                selectDependToAnother,
              },
              i
            ) => (
              <Route
                key={i}
                path={path}
                element={
                  <GlobalForAdmin
                    path={path}
                    apiCall={apiCall}
                    apiCallForAdd={apiCallForAdd}
                    apiCallForDelete={apiCallForDelete}
                    apiCallForEdit={apiCallForEdit}
                    isLoading={isLoading}
                    isLoadingForAction={isLoadingForAction}
                    pageName={pageName}
                    title={title}
                    Icon={Icon}
                    description={description}
                    tableTitle={tableTitle}
                    data={data}
                    tableColumns={tableColumns}
                    FieldsForAdd={FieldsForAdd}
                    FieldsForEdit={FieldsForEdit}
                    selectDependToAnother={selectDependToAnother}
                  />
                }
              />
            )
          )}
        </Route>
      </Routes>
      <ToastContainer hideProgressBar={true} position="bottom-left" />
    </>
  );
}

export default App;
