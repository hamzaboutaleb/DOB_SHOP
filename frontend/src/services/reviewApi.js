import { apiClient } from "../configs/configs";

export async function getBySlug(slug) {
  const response = await apiClient().get(`/products/${slug}/reviews/`);
  return response.data;
}

export async function post(slug, rating, desc) {
  try {
    const resp = await apiClient().post(`/products/${slug}/reviews/`, {
      rating: rating,
      description: desc,
    });
    return resp.data;
  } catch (error) {
    throw error.response.data.error;
  }
}
