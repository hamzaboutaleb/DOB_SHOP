import Link from "../../../../components/link/Link";
import ProductItem from "../../../../components/productItem/ProductItem";
import styles from "./styles.module.css";
const product = {
  id: 0,
  title: "MOROCCO NATIONAL FOOTBALL TEAM JERSEYS",
  price: "100",
  image:
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/765812/02/fnd/DFA/fmt/png/Morocco-Away-22/23-Replica-Jersey-Men",
};
function BestProduct() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Best Product</h2>
        <div className={styles.list}>
          <ProductItem product={product} />
          <ProductItem product={product} />
          <ProductItem product={product} />
        </div>
        <div className="center">
          <Link href="#">See More Products &rarr;</Link>
        </div>
      </div>
    </section>
  );
}

export default BestProduct;
