import Alert from "../../../../components/alert/Alert";
import styles from "./styles.module.css";
function NoProduct({ query }) {
  let error =
    "Oops! It seems you've skipped beyond the maximum available pages. Please make sure you're navigating within the valid page range.";
  if (query) {
    error = `Oops! We couldn't find any products with the name ${query} Please
    double-check the spelling or try using different keywords`;
  }
  return (
    <div className="container">
      <div className={styles.error}>
        <Alert type="error">{error}</Alert>
      </div>
    </div>
  );
}

export default NoProduct;
