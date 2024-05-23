import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from './api';

export async function login(email, password) {
  try {
    const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.TOKEN}`, { email, password });
    if (response.data.access_token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export function logout() {
  localStorage.removeItem('user');
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.access_token) {
    return { Authorization: 'Bearer ' + user.access_token };
  } else {
    return {};
  }
}
