import styles from "./styles.module.css";
import userIcon from "./../../assets/svg/user-icon.svg";
import shoppingCartIcon from "./../../assets/svg/shoppin-cart-icon.svg";
import SearchInput from "../searchInput/SearchInput";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/categoryApi";
import Loader from "../loader/Loader";

function Header() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.logo}>
        <Logo />
        <div className={styles.category}>
          <span>Categories</span>
          {isLoading && <Loader />}

          <ul>
            {!isLoading &&
              data.map((category) => {
                if (category.products.length > 0)
                  return (
                    <li key={category.id}>
                      <Link to={`/category/${category.slug}`}>
                        {category.name}
                      </Link>
                    </li>
                  );
                return null;
              })}
          </ul>
        </div>
      </div>
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
