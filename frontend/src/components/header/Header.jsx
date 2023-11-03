import styles from "./styles.module.css";
import userIcon from "./../../assets/svg/user-icon.svg";
import shoppingCartIcon from "./../../assets/svg/shoppin-cart-icon.svg";
import SearchInput from "../searchInput/SearchInput";
import Logo from "../logo/Logo";

function Header() {
  return (
    <header className={`${styles.header} container`}>
      <Logo />
      <SearchInput />
      <div className={styles["header__actions"]}>
        <a href="#">
          <img src={userIcon} alt="" />
        </a>
        <a href="#">
          <img src={shoppingCartIcon} alt="" />
        </a>
      </div>
    </header>
  );
}

export default Header;
