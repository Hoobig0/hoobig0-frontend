import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";

const BASE_URL = "";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const createApiMethod =
  (_axiosInstance: AxiosInstance, methodType: Method) =>
  <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return _axiosInstance({
      ...config,
      method: methodType,
    });
  };

const api = {
  get: createApiMethod(instance, "get"),
  post: createApiMethod(instance, "post"),
  patch: createApiMethod(instance, "patch"),
  put: createApiMethod(instance, "put"),
  delete: createApiMethod(instance, "delete"),
};

export default api;
