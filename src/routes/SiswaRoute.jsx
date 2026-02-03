import { Navigate } from "react-router-dom";

export default function SiswaRoute({ children }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "siswa") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
