import Rating from "../../../../../../components/rating/Rating";
import styles from "./styles.module.css";
import Loader from "../../../../../../components/loader/Loader";

function Reviews({ isLoading, data }) {
  if (isLoading) return <Loader />;
  if (!data) return null;
  return (
    <div className={styles.list}>
      {[...data].reverse().map((review) => (
        <div key={review.id} className={styles.item}>
          <div className={styles.itemUser}>{review?.username}</div>
          <Rating value={review.rating} />
          <div className={styles.itemBody}>{review.description}</div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
