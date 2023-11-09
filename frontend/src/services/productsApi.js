import { apiClient } from "./../configs/configs";

export async function getAll() {
  const response = await apiClient.get("/products/");
  return response.data;
}

export async function getBySlug(slug) {
  const response = await apiClient.get(`/products/${slug}`);
  return response.data;
}
