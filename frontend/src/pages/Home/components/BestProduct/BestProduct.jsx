import ProductItem from "../../../../components/productItem/ProductItem";
import { useProducts } from "../../../../hooks/useProduct";
import styles from "./styles.module.css";

function BestProduct() {
  const { data, isLoading, isError } = useProducts();
  if (isLoading) return null;
  if (isError) return null;
  const products = data?.slice(0, 3);
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Best Product</h2>
        <div className={styles.list}>
          {products?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        {/* <div className="center">
          <Link href="#">See More Products &rarr;</Link>
        </div> */}
      </div>
    </section>
  );
}

export default BestProduct;
