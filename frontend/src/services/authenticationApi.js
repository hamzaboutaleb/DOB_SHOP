import { apiClient } from "../configs/configs";

export async function requestLogin({ username, password }) {
  try {
    const response = await apiClient.post("/login/", {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.error);
  }
}
