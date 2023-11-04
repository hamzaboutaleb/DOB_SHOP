import { axios } from "./../configs/configs";

async function getAll() {
  const resp = axios.get("/products");
  console.log(resp);
}

function getBySlug(slug) {
  return slug;
}

export default {
  getAll,
  getBySlug,
};
