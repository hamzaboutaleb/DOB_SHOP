import { useSearchParams } from "react-router-dom";
import { searchConifg } from "../../configs/configs";
import styles from "./styles.module.css";
function Pagination({ totalProduct }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { productPerPage } = searchConifg;
  const currentPage = searchParams.get("page") || 1;
  const numberOfPages = Math.ceil(totalProduct / productPerPage);

  function toPage(page) {
    setSearchParams((params) => ({
      ...Object.fromEntries([...params]),
      page: page,
    }));
  }
  if (numberOfPages == 1) return;
  return (
    <div className={`${styles.pagination} margin-x-auto`}>
      {[...Array(numberOfPages)].map((_, i) => {
        return (
          <div
            onClick={() => toPage(i + 1)}
            key={i + 1}
            className={currentPage == i + 1 ? styles.active : ""}
          >
            {" "}
            {i + 1}
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;
