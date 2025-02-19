import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const user = null

  return (
    user ? <Outlet/> : <Navigate to= "/admin"/>
  );
};

export default ProtectedRoute;
