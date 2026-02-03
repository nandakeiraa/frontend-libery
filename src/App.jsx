import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";

import AdminDashboard from "./pages/AdminDashboard";
import SiswaDashboard from "./pages/SiswaDashboard";

import AdminRoute from "./routes/AdminRoute";
import SiswaRoute from "./routes/SiswaRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* SISWA */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/siswa"
          element={
            <SiswaRoute>
              <SiswaDashboard />
            </SiswaRoute>
          }
        />

        {/* ADMIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        {/* DEFAULT */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
