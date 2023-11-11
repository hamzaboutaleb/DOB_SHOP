import Button from "../../components/button/Button";
import styles from "./styles.module.css";
import { search } from "../../services/productsApi";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from "../../components/pagination/Pagination";
import ProductsList from "./components/ProductsList/ProductsList";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const min = searchParams.get("min");
  const max = searchParams.get("max");
  const { query } = useParams();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["search", query, min, max],
    queryFn: () => search(query, min, max),
  });

  useEffect(() => {
    refetch();
  }, [refetch, minPrice, maxPrice]);

  function handleFilter(e) {
    e.preventDefault();
    setSearchParams((params) => {
      return {
        ...Object.fromEntries([...params]),
        min: minPrice,
        max: maxPrice,
        page: 1,
      };
    });
  }

  return (
    <div className={`${styles.search} container margin-t-5`}>
      <div className={styles.sectionFilter}>
        <h3>Price Range</h3>
        <form onSubmit={handleFilter}>
          <div className={styles.rangeInput}>
            <input
              type="text"
              value={minPrice}
              onChange={(e) => setMinPrice(+e.target.value)}
            />
            <input
              type="text"
              value={maxPrice}
              onChange={(e) => setMaxPrice(+e.target.value)}
            />
          </div>
          <Button type="submit" className={["btn", "primary"]}>
            Filter
          </Button>
        </form>
      </div>
      <div className={`margin-b-12`}>
        <ProductsList isLoading={isLoading} products={data} />
        <Pagination totalProduct={data?.length || 1} />
      </div>
    </div>
  );
}

export default Search;
