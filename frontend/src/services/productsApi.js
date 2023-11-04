import { apiClient } from "./../configs/configs";

async function getAll() {
  const response = await apiClient.get("/products/");
  return response.data;
}

function getBySlug(category, slug) {
  return slug;
}

export default {
  getAll,
  getBySlug,
};
