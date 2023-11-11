import FormReview from "./components/FormReview/FormReview";
import styles from "./styles.module.css";

import Reviews from "./components/Reviews/Reviews";
import ForUser from "../../../../components/authComponents/ForUser";

import { useReview } from "./hooks/useReview";

function Review() {
  const { data, isLoading, refetch } = useReview();
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
