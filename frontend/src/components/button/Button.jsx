import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { toClassName } from "../../utlis/toClassName";

function Button({ children, href, className, onClick }) {
  const classes = toClassName(className, styles);
  if (onClick)
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  );
}

export default Button;
