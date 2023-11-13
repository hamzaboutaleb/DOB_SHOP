import { Link } from "react-router-dom";
import Button from "../button/Button";
import styles from "./styles.module.css";
import { toImage } from "../../utlis/toImage";
import { addToCart } from "../../services/orderApi";
import { toast } from "react-toastify";

function ProductItem({ product }) {
  const { id, slug, primary_image: image, name, price } = product;
  const imageLink = toImage(image);
  const link = `/product/${slug}`;

  async function handleAddToCart() {
    try {
      await addToCart({ product: id });
      toast.info("Product added successfully");
    } catch (error) {
      toast.warn("Something went wrong, Please try again");
    }
  }
  return (
    <article className={styles.product}>
      <Link to={link} className={styles.link}>
        <img className={styles.img} src={imageLink} alt="" />
      </Link>
      <h3 className={styles.title}>
        <Link to={link} className={styles.link}>
          {name}
        </Link>
      </h3>
      <div className={styles.actions}>
        <span className={styles.price}>{price} Dhs</span>
        <Button onClick={handleAddToCart} className={["primary", "small"]}>
          add to cart
        </Button>
      </div>
    </article>
  );
}

export default ProductItem;
