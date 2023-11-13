import { apiClient } from "../configs/configs";

export async function requestLogin({ username, password }) {
  try {
    const response = await apiClient().post("/login/", {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function requestRegister(data) {
  try {
    const body = inputToBody(data);
    await apiClient().post("/register/", body);
  } catch (err) {
    throw err.response.data;
  }
}

function inputToBody(data) {
  const body = {};

  for (let key in data) {
    body[key] = data[key].value;
  }
  return body;
}

export async function logout() {
  return await apiClient().post("/logout/");
}
