import Button from "../../../../components/button/Button";
import Grid from "../../../../components/grid/Grid";
import Loader from "../../../../components/loader/Loader";
import Rating from "../../../../components/rating/Rating";
import { toImage } from "../../../../utlis/toImage";
import styles from "./styles.module.css";

function ProductDetails({ data, isLoading }) {
  if (isLoading) return <Loader />;
  const images = data.images.slice(0, 3);
  return (
    <Grid cols={2} gap={5.2} className="margin-t-5 margin-b-5">
      <div>
        <div className={styles.thumbnail}>
          <img src={toImage(data.primary_image)} alt="" />
        </div>
        <div className={styles.imagesList}>
          {images.map((img, i) => (
            <img key={i} src={toImage(img.image)} alt="" />
          ))}
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <div className={styles.title}>{data.name}</div>
          <Rating value={data.average_rating} />
        </div>
        <div className={styles.price}>
          <h3>Price</h3>
          <span>{data.price}Dhs</span>
        </div>
        <div className={styles.quantity}>
          <h3>quantity</h3>
          <div className={styles.quantityForm}>
            <button>-</button>
            <h4>0</h4>
            <button>+</button>
          </div>
        </div>
        <Button type="button" className={["btn", "primary-1"]}>
          Add To Cart
        </Button>
        <div className={styles.description}>
          <h3>Description</h3>
          <p>{data.description}</p>
        </div>
        <div className={styles.information}>
          <div className={styles.informationList}>
            <div className={styles.informationItem}>
              <h3>Shipping</h3>
              <p>
                Shipping: Ships within 2 business days. Free shipping on orders
                over $50. Return Policy: We offer a 30-day satisfaction
                guarantee. See our [Return Policy] for details.
              </p>
            </div>
            <div className={styles.informationItem}>
              <h3>Return Policy</h3>
              <p>
                Return Policy: We offer a 30-day satisfaction guarantee. See our
                [Return Policy] for details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default ProductDetails;
