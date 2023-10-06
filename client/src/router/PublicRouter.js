import React from 'react'
import AuthLayout from '../app/layouts/auth-layout/AuthLayout';
import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRouter() {
    const isLoggedIn = localStorage.getItem("user");
  return (
    <>
      {
        !isLoggedIn?(
            <AuthLayout>
                <Outlet/>
            </AuthLayout>
        ):(<Navigate to = "/"/>)
      }
    </>
  )
}
