import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ nivelMinimo }) {
  const nivel = Number(localStorage.getItem("nivelAcesso"));

  if (!nivel) {
    return <Navigate to="/" replace />;
  }

  if (nivel < nivelMinimo) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
}
