import api from '../../../services/api';

export const loginApi = (data) =>
  api.post('/auth/login', data);

export const googleLoginApi = (accessToken) =>
  api.post('/auth/google', { accessToken });

export const instagramLoginApi = (token) =>
  api.post('/auth/instagram', { token });
