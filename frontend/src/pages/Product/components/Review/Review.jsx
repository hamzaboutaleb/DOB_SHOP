import FormReview from "./components/FormReview/FormReview";
import styles from "./styles.module.css";

import Reviews from "./components/Reviews/Reviews";
import ForUser from "../../../../components/authComponents/ForUser";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getBySlug } from "../../../../services/reviewApi";

function Review() {
  const { slug } = useParams();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["reviews", slug],
    queryFn: () => getBySlug(slug),
  });
  return (
    <div className={styles.review}>
      <h2 className={styles.title}>Reviews</h2>
      <ForUser>
        <FormReview refetch={refetch} />
      </ForUser>
      <Reviews data={data} isLoading={isLoading} />
    </div>
  );
}

export default Review;
