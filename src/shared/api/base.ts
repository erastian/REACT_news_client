import { API_URL } from "~shared/config";
import axios from "axios";
import { Api } from "~shared/api/Api.ts";

const ApiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});


ApiInstance.interceptors.request.use(
    (config) => {

      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${ localStorage.getItem("accessToken") }`;
      }

      return config;
    }, error => {
      return Promise.reject(error);
    }
);

ApiInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
      const prevRequest = error.config;
      if (error.response.status === 403 && !prevRequest._retry) {
        prevRequest._retry = true;

        try {
          await Api.users.fetchToken();
          prevRequest.headers.Authorization = `Bearer ${ localStorage.getItem("accessToken") }`;

          return ApiInstance(prevRequest);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      return Promise.reject(error);
    }
)

export default ApiInstance;