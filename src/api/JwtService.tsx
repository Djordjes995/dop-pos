import { baseRequest } from "./Api";

export const getToken = () => {
  return localStorage.getItem('token');
};

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const setRefreshToken = (token) => {
  localStorage.setItem('refreshToken', token);
};

export const unsetToken = () => {
  localStorage.removeItem('token');
};

export const unsetRefreshToken = () => {
  localStorage.removeItem('refreshToken');
};

export const setAxiosToken = () => {
  baseRequest.defaults.headers["Authorization"] = "Bearer " + getToken();
};

export default {
  getToken,
  setToken,
  unsetToken,
  getRefreshToken,
  setRefreshToken,
  setAxiosToken,
  unsetRefreshToken,
};
