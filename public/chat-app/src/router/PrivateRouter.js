import React from "react";
import MainLayout from "../app/layouts/main-layout/MainLayout";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter() {
  const isLoggedIn = localStorage.getItem("user");
  return (
    <>
      {isLoggedIn ? (
        <MainLayout>
          <Outlet />
        </MainLayout>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
