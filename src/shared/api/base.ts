import { API_URL } from "~shared/config";
import axios, { AxiosInstance } from "axios";
import { Api } from "~shared/api/Api.ts";

const ApiInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
const ApiPrivateInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export function UseApi(): AxiosInstance {
  return ApiInstance;
}

export function UsePrivateApi(): AxiosInstance {
  ApiPrivateInstance.interceptors.request.use(
      (config) => {

        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${ localStorage.getItem("accessToken") }`;
        }

        return config;
      }, error => {
        return Promise.reject(error);
      }
  );

  ApiPrivateInstance.interceptors.response.use(
      response => response,

      async (error) => {
        const prevRequest = error.config;

        if (error.response.status === 403 && !prevRequest._retry) {
          prevRequest._retry = true;

          try {
            await Api.users.fetchToken();
            prevRequest.headers.Authorization = `Bearer ${ localStorage.getItem("accessToken") }`;

            return ApiInstance(prevRequest);
          } catch (error) {
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
  )

  return ApiPrivateInstance;
}