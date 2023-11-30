import { API_URL, PAGE_PATH } from "~shared/config";
import axios, { AxiosError } from "axios";
import { Api } from "~shared/api/Api.ts";
import { useNavigate } from "react-router-dom";
import { sessionModel } from "~entities/session";

const ApiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});


ApiInstance.interceptors.request.use(
    (config) => {

      if (config.url) {
        const accessToken = localStorage.getItem("accessToken");
        config.headers.Authorization = `Bearer ${ accessToken }`;
        // if (!['login', 'token'].some(u => config.url?.includes(u))) {
        //   config.headers.Authorization = `Bearer ${ accessToken }`;
        // }
      }

      return config;
    },
    (error) => {
      console.log('Request error: ', error);
      return Promise.reject(error);
    }
);

ApiInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
      const originalConfig = error?.config;
      if (error.response) {

        if (error.response.status === 403 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const { accessToken } = await Api.users.fetchToken();

            sessionModel.addAccessTokenToStore(accessToken);
            return ApiInstance(originalConfig);
          } catch (_err) {
            if (_err instanceof AxiosError) {
              if (_err.response && _err.response.data) {
                return Promise.reject(_err.response.data);
              }
            }
            return Promise.reject(_err);
          }
        }

        if (error.response.status === 401 && error.response.data) {
          const navigate = useNavigate();
          console.log('401: User unauthorized');
          navigate(PAGE_PATH.login);
          throw error;
        }
      }
      return Promise.reject(error);
    }
)

export default ApiInstance;