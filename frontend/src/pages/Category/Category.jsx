import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../../services/categoryApi";
import ProductsList from "../../components/ProductsList/ProductsList";
import styles from "./styles.module.css";
import Pagination from "../../components/pagination/Pagination";
import Loader from "../../components/loader/Loader";
function Category() {
  const { slug } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["category", slug],
    queryFn: () => getProductByCategory(slug),
  });
  return (
    <div className={`${styles.category} container margin-t-5`}>
      <div></div>
      <div className={`margin-b-12`}>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductsList isLoading={isLoading} products={data.products} />
        )}

        <Pagination totalProduct={data?.products.length || 1} />
      </div>
    </div>
  );
}

export default Category;
