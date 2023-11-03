import styles from "./styles.module.css";
function Logo({ className }) {
  return (
    <div className={`${styles.logo} ${className}`}>
      <span>dob</span>
      <span>shop</span>
    </div>
  );
}

export default Logo;
