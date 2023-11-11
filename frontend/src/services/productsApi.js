import { apiClient } from "./../configs/configs";

export async function getAll() {
  const response = await apiClient.get("/products/");
  return response?.data;
}

export async function getBySlug(slug) {
  try {
    const response = await apiClient.get(`/products/${slug}`);
    return response.data;
  } catch ({ response }) {
    if (response.status == 404) {
      throw new Error("Product not found");
    }
  }
}
