import Logo from "../logo/Logo";
import styles from "./styles.module.css";

import facebookIcon from "./../../assets/svg/icon-facebook.svg";
import instagramIcon from "./../../assets/svg/icon-instagram.svg";
import twitterIcon from "./../../assets/svg/icon-twitter_.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.info}>
            <Logo />
            <p>
              we&apos;re more than just an e-commerce store; we're a passionate
              team dedicated to bringing you quality products that enhance your
              life. Our journey began with a simple belief: that every purchase
              should make you smile.
            </p>
          </div>
          <div className={styles.link}>
            <h3>Quick links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Producst</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h3>Contact Us</h3>
            <address>Morocco</address>
            <a href="mailto:dobshop@gmail.com">dobshop@gmail.com</a>
            <div className={styles.contactSocialNet}>
              <a href="#">
                <img src={facebookIcon} alt="facebook page" />
              </a>
              <a href="#">
                <img src={instagramIcon} alt="instagram page" />
              </a>
              <a href="#">
                <img src={twitterIcon} alt="twitter page" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
