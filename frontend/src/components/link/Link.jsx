import { Link as LinkDom } from "react-router-dom";
import styles from "./styles.module.css";
function Link({ children, href }) {
  return (
    <LinkDom to={href} className={styles.primary}>
      {children}
    </LinkDom>
  );
}

export default Link;
