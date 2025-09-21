import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export const getDrivers = () => api.get("/drivers");
export const getRoutes = () => api.get("/routes");
export const getOrders = () => api.get("/orders");
export const runSimulation = () => api.post("/simulate");
export const login = (username, password) => api.post("/auth/login", { username, password });

export default api;