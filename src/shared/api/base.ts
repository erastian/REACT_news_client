import { API_URL } from "~shared/config";
import axios from "axios";
import { Api } from "~shared/api/Api.ts";

const ApiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


ApiInstance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("accessToken") || '';

      if (accessToken) {
        config.headers.Authorization = `Bearer ${ accessToken }`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

ApiInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      console.log(originalRequest.url)
      if(originalRequest.url !== 'auth/register' && error.response) {
        if(error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const { accessToken } = await Api.users.fetchToken();
            localStorage.setItem("accessToken", accessToken);
            return ApiInstance(originalRequest);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(error);
    }
)

export default ApiInstance;