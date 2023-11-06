import { apiClient } from "./../configs/configs";

async function getAll() {
  const response = await apiClient.get("/products/");
  return response.data;
}

async function getBySlug(slug) {
  const response = await apiClient.get(`/products/${slug}`);
  return response.data;
}

export default {
  getAll,
  getBySlug,
};
