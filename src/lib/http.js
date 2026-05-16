import axios from 'axios';
import { API_URL } from './constants';

const http = axios.create({
  baseURL: API_URL,
});

http.interceptors.request.use((config) => {
  const { intercept = true } = config;
  if (!intercept) return config;
});

export default http;
