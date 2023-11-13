import { apiClient } from "./../configs/configs";

export async function getAll() {
  const response = await apiClient().get("/products/");
  return response?.data;
}

export async function getBySlug(slug) {
  try {
    const response = await apiClient().get(`/products/${slug}/`);
    return response.data;
  } catch ({ response }) {
    if (response.status == 404) {
      throw new Error("Product not found");
    }
  }
}

export async function search(query, min, max) {
  const body = {};
  if (query) {
    body.query = query;
  }
  if (min) {
    body.min_price = min;
  }
  if (max) {
    body.max_price = max;
  }
  const res = await apiClient().post("/products/search/", body);
  console.log(query, min, max);
  return res.data;
}
