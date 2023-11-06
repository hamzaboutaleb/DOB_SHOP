import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { toClassName } from "../../utlis/toClassName";

function Button({ children, href, className, onClick, type }) {
  const classes = className ? toClassName(className, styles) : "";
  if (onClick || type)
    return (
      <button type={type} onClick={onClick} className={classes}>
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
