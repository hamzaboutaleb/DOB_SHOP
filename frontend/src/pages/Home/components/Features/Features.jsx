import Logo from "../../../../components/logo/Logo";
import styles from "./styles.module.css";

import qualityIcon from "./../../../../assets/svg/quality-icon.svg";
import shoppingIcon from "./../../../../assets/svg/icon-shopping.svg";
import globalIcon from "./../../../../assets/svg/icon-globe.svg";
function Features() {
  console.log(styles);
  return (
    <section>
      <div className="container">
        <h2 className={styles.title}>
          Why You’ll Love <Logo className="inline" />
        </h2>
        <div className={styles.list}>
          <div className={styles.item}>
            <img className={styles.itemIcon} src={qualityIcon} alt="quality" />
            <h3 className={styles.itemTitle}>quality</h3>
            <p className={styles.itemText}>
              Each item is carefully inspected for the highest quality.
            </p>
          </div>
          <div className={styles.item}>
            <img
              className={styles.itemIcon}
              src={shoppingIcon}
              alt="shopping"
            />
            <h3 className={styles.itemTitle}>Easy Shopping</h3>
            <p className={styles.itemText}>
              Effortless, secure, and user-friendly experience.
            </p>
          </div>
          <div className={styles.item}>
            <img className={styles.itemIcon} src={globalIcon} alt="globe" />
            <h3 className={styles.itemTitle}>Global Shipping</h3>
            <p className={styles.itemText}>
              We deliver Morocco&apos;s beauty to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
