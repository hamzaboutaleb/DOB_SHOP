import styles from "./styles.module.css";
function Alert({ type = "primary", children }) {
  const classes = styles[type];
  if (children == null) return null;
  return <div className={`${styles.alert} ${classes}`}>{children}</div>;
}

export default Alert;
