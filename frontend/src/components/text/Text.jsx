import styles from "./styles.module.css";
function Text({ children, type = "primary" }) {
  const classes = styles[type];
  return <div className={`${classes} ${styles.text}`}>{children}</div>;
}

export default Text;
