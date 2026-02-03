import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import SiswaDashboard from "./pages/SiswaDashboard";

// CEK LOGIN
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// CEK ROLE
const getRole = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).role : null;
};

// PROTECTED ROUTE
const ProtectedRoute = ({ children, role }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (role && getRole() !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            isAuthenticated() ? (
              getRole() === "admin" ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/siswa" />
              )
            ) : (
              <Login />
            )
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* SISWA */}
        <Route
          path="/siswa"
          element={
            <ProtectedRoute role="siswa">
              <SiswaDashboard />
            </ProtectedRoute>
          }
        />

        {/* DEFAULT */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}
