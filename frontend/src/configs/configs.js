import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
import { getJWT } from "../utlis/auth";

export const URL = "http://127.0.0.1:8000";
const API_URL = `${URL}/api/v1`;
export const searchConifg = {
  productPerPage: 1,
};
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      retry: false,
      throwOnError: true,
    },
  },
});

const token = getJWT();

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: { Authorization: token ? `token ${getJWT()}` : "" },
});
