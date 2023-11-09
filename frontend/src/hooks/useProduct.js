import { useQuery } from "@tanstack/react-query";
import { getAll } from "../services/productsApi";

const QUERY_KEY = ["products"];

export function useProducts() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: getAll,
  });
}
