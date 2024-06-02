import axios from "axios";
import qs from "qs";

export const $axios = axios.create({
  baseURL: "http://13.125.8.139:8080",
  timeout: 40000,
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  },
  withCredentials: true,
});
