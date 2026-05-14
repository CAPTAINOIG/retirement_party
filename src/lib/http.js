import axios from 'axios';

const http = axios.create({
  // baseURL: VITE_API_BASE_URL,

});

http.interceptors.request.use((config) => {
  const { intercept = true } = config;
  if (!intercept) return config;
});

export default http;
