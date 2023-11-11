import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function Logo({ className }) {
  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
      }}
    >
      <div className={`${styles.logo} ${className}`}>
        <span>dob</span>
        <span>shop</span>
      </div>
    </Link>
  );
}

export default Logo;
