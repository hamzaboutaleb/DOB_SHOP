import { useMutation } from "@tanstack/react-query";
import Button from "../../../../components/button/Button";
import styles from "./styles.module.css";
import { addToCart } from "../../../../services/orderApi";
import { useState } from "react";
function QuantityForm({ product }) {
  const [quantity, setQuantity] = useState(0);
  const { id } = product;
  const { mutate } = useMutation({
    mutationFn: addToCart,
  });
  function handleIncrease() {
    setQuantity((q) => q + 1);
  }
  function handleDecrease() {
    if (quantity == 0) return;
    setQuantity((q) => q - 1);
  }
  function onSubmit() {
    mutate({
      product: id,
      quantity: quantity,
    });
  }
  return (
    <>
      <div className={styles.quantity}>
        <h3>quantity</h3>
        <div className={styles.quantityForm}>
          <button onClick={handleDecrease}>-</button>
          <h4>{quantity}</h4>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
      <Button onClick={onSubmit} type="button" className={["btn", "primary-1"]}>
        Add To Cart
      </Button>
    </>
  );
}

export default QuantityForm;
