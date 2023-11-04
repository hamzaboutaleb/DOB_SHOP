import axiosG from "axios";

const URL = "http://127.0.0.1:8000";
const API_URL = `${URL}/api/v1`;

export const axios = axiosG.create({
  baseURL: API_URL,
});
