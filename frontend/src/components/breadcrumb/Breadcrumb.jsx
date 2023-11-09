import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function Breadcrumb({ className, items }) {
  return (
    <div className={className}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.name} className={styles.item}>
            <Link to={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
