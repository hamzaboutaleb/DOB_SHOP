import styles from "./styles.module.css";
import userIcon from "./../../assets/svg/user-icon.svg";
import shoppingCartIcon from "./../../assets/svg/shoppin-cart-icon.svg";
import SearchInput from "../searchInput/SearchInput";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={`${styles.header} container`}>
      <Logo />
      <SearchInput />
      <div className={styles["header__actions"]}>
        <Link to="/login">
          <img src={userIcon} alt="" />
        </Link>
        <a href="#">
          <img src={shoppingCartIcon} alt="" />
        </a>
      </div>
    </header>
  );
}

export default Header;
