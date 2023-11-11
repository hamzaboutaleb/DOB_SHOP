import { useParams } from "react-router-dom";
import { getBySlug } from "../../../../../services/reviewApi";
import { useQuery } from "@tanstack/react-query";

export function useReview() {
  const { slug } = useParams();

  const query = useQuery({
    queryKey: ["reviews", slug],
    queryFn: () => getBySlug(slug),
  });

  return query;
}
