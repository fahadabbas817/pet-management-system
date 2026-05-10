import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  withCredentials: true,
});

// Optionally, add response interceptor to handle 401 Unauthorized globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // We can emit an event or just let the components handle it
      // For a robust SPA, you might redirect to login here if not already on login
      // However, the AuthContext handles initial load, so we'll leave it simple.
    }
    return Promise.reject(error);
  }
);

export default api;
