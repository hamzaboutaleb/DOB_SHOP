import { apiClient } from "../configs/configs";

export async function getOrders() {
  try {
    const resp = await apiClient.get("/order-list");
    return resp;
  } catch (error) {
    throw new Error(error.response.data);
  }
}
export async function addToCart({ product, action = "up", quantity = 1 }) {
  const resp = await apiClient.post("/add-to-cart/", {
    product,
    action,
    quantity,
  });
  return resp.data;
}
export async function deleteOrderItem({ orderId, orderItemId }) {
  const resp = await apiClient.delete(
    `/remove-from-cart/${orderId}/${orderItemId}/`
  );
  return resp.data;
}

export async function increaseQuantity(product) {
  const resp = await apiClient.post("/add-to-cart/", {
    product,
    action: "up",
  });

  return resp.data;
}
export async function decreaseQuantity(product) {
  const resp = await apiClient.post("/add-to-cart/", {
    product,
    action: "down",
  });

  return resp.data;
}
