import { apiClient } from "../configs/configs";

export async function getProductByCategory(category) {
  try {
    const resp = await apiClient.get(`/categories/${category}/`);
    console.log(resp);
    return resp.data;
  } catch (error) {
    throw new Error(
      "Oops! It looks like the category you're searching for is not available"
    );
  }
}
