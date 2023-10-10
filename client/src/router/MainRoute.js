import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import Login from "../app/modules/authentication/login-page/Login";
import PrivateRouter from "./PrivateRouter";
import Welcome from "../app/modules/welcome/Welcome";
import SignUp from "../app/modules/authentication/signup-page/SignUp";
import ForgotPassword from "../app/modules/authentication/forgot-password/ForgotPassword";
import Dashboard from "../app/modules/dashboard/Dashboard";
import SetAvatar from "../app/modules/avtar/SetAvatar";
import MainLayout from "../app/layouts/main-layout/MainLayout";

export default function MainRoute() {
  return (
    <Routes>
      {/* public router  */}
      <Route path="/" element={<PublicRouter />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Route>

      {/* private router  */}
      <Route path="/" element={<PrivateRouter />}>
        <Route index element={<MainLayout><Welcome /></MainLayout>} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
      </Route>
    </Routes>
  );
}
