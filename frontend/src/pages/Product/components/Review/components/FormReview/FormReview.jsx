import { useState } from "react";
import Button from "../../../../../../components/button/Button";
import Rating from "../../../../../../components/rating/Rating";
import styles from "./styles.module.css";
import { post } from "../../../../../../services/reviewApi";
import { useParams } from "react-router";
import Alert from "../../../../../../components/alert/Alert";

function FormReview({ refetch }) {
  const { slug } = useParams();
  const [rating, setRating] = useState(0);
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(null);
  async function handleSubmit() {
    try {
      setError(null);
      await post(slug, rating, desc);
      refetch();
      setRating(0);
      desc("");
    } catch (error) {
      console.log("test");
      setError(error);
    }
  }
  return (
    <div className={`${styles.form} margin-b-5`}>
      <Alert type="error">{error}</Alert>
      <Rating value={rating} onClick={setRating} />
      <textarea
        name=""
        id=""
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
        cols="30"
        rows="10"
      ></textarea>
      <Button
        onClick={handleSubmit}
        type="button"
        className={["btn", "primary-1"]}
      >
        New Review
      </Button>
    </div>
  );
}

export default FormReview;
