import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const userRaw = localStorage.getItem("user");

  if (!token || !userRaw) {
    return <Navigate to="/admin/login" replace />;
  }

  const user = JSON.parse(userRaw);
  const role = user.role?.toLowerCase();

  if (role !== "admin") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
