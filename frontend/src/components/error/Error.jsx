import { useRouteError } from "react-router-dom";
import styles from "./styles.module.css";
function Error() {
  const error = useRouteError();

  return (
    <div className="container margin-t-5 margin-b-5 text-center">
      <div className={styles.error}>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </div>
      <h1 className={styles.errorMessage}>{error.message}</h1>
    </div>
  );
}

export default Error;
