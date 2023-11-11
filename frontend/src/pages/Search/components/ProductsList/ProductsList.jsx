import { useParams, useSearchParams } from "react-router-dom";
import ProductItem from "../../../../components/productItem/ProductItem";
import styles from "./styles.module.css";
import { searchConifg } from "../../../../configs/configs";
import NoProduct from "../NoProduct/noProduct";
import Loader from "../../../../components/loader/Loader";
function ProductsList({ products, isLoading }) {
  const [searchParams] = useSearchParams();
  const { query } = useParams();
  const page = searchParams.get("page") || 1;
  const start = (page - 1) * searchConifg.productPerPage;
  const end =
    (page - 1) * searchConifg.productPerPage + searchConifg.productPerPage;

  if (isLoading) return <Loader />;

  if (products.length === 0) return <NoProduct query={query} />;

  const filtredProduct = products.slice(start, end);
  if (filtredProduct.length == 0) return <NoProduct />;

  return (
    <div className="section-result-header">
      <div className={`${styles.resultCount} margin-b-4`}>
        {start}-{end} of {products.length} results for {query}
      </div>
      <div className={`${styles.resultList}  margin-b-5`}>
        {filtredProduct.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
