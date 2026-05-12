import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "https://retirement-party-backend.onrender.com";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 60000,
});

export default axiosInstance;
