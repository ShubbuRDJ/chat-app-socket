import React from "react";
// import MainLayout from "../app/layouts/main-layout/MainLayout";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter() {
  const isLoggedIn = localStorage.getItem("token");
  return (
    <>
      {isLoggedIn ? (
          <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
