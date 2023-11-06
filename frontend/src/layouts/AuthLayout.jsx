import { Outlet } from "react-router-dom";
import styles from "./../components/header/styles.module.css";
import Logo from "../components/logo/Logo";
function AuthLayout() {
  return (
    <>
      <header className={`margin-l-5 margin-b-12 ${styles.header}`}>
        <Logo />
      </header>
      <Outlet />
    </>
  );
}

export default AuthLayout;
