import api from './api';

export const authService = {
  async login(credentials: any) {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  async register(data: any) {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },

  async logout() {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  async getProfile() {
    const response = await api.get('/auth/me');
    return response.data;
  },
};
