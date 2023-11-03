import { Link } from "react-router-dom";
import Button from "../button/Button";
import styles from "./styles.module.css";
function ProductItem({ product }) {
  const { image, title, price } = product;
  return (
    <article className={styles.product}>
      <Link to="/ahh" className={styles.link}>
        <img className={styles.img} src={image} alt="" />
      </Link>
      <h3 className={styles.title}>
        <Link to="/ahh" className={styles.link}>
          {title}
        </Link>
      </h3>
      <div className={styles.actions}>
        <span className={styles.price}>{price} Dhs</span>
        <Button className={["primary", "small"]}>add to cart</Button>
      </div>
    </article>
  );
}

export default ProductItem;
