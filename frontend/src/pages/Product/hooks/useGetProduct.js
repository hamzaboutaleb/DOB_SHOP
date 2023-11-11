import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBySlug } from "../../../services/productsApi";

export function useGetProduct() {
  const { slug } = useParams();
  const { data, isLoading: isLoadingProduct } = useQuery({
    queryKey: ["prodict", slug],
    queryFn: () => getBySlug(slug),
  });
  return {
    data,
    isLoadingProduct,
  };
}
