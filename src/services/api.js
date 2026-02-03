import axios from "axios";

// BASE API
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: false, // Sanctum token (Bearer)
});

/*
|--------------------------------------------------------------------------
| REQUEST INTERCEPTOR
| Otomatis kirim token
|--------------------------------------------------------------------------
*/
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/*
|--------------------------------------------------------------------------
| RESPONSE INTERCEPTOR
| Handle token expired / unauthorized
|--------------------------------------------------------------------------
*/
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // TOKEN INVALID / EXPIRED
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // redirect ke login
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
