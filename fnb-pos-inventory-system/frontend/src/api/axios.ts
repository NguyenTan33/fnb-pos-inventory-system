import axios from 'axios';

// Detect custom env API URL or default directly to ASP.NET Core dev backend (https://localhost:7076/api)
const envApiUrl = (import.meta as any).env?.VITE_API_BASE_URL;
const defaultApiBaseUrl = 'https://localhost:7076/api';

const api = axios.create({
  baseURL: envApiUrl || defaultApiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor to attach Bearer token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for status codes (including HTTP 200, 201 Created)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('jwt_token');
      localStorage.removeItem('user_info');
    }
    return Promise.reject(error);
  }
);

export default api;
