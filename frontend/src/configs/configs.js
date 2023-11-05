import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

export const URL = "http://127.0.0.1:8000";
const API_URL = `${URL}/api/v1`;

export const queryClient = new QueryClient();

export const apiClient = axios.create({
  baseURL: API_URL,
});
