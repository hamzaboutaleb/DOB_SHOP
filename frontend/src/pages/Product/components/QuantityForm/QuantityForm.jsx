import Button from "../../../../components/button/Button";
import styles from "./styles.module.css";
function QuantityForm({ product }) {
  console.log(product);
  return (
    <>
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
    </>
  );
}

export default QuantityForm;
