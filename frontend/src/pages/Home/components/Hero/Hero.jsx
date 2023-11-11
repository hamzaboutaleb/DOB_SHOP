import styles from "./styles.module.css";

import HeroImg0 from "./../../../../assets/images/hero-0.png";
import HeroImg1 from "./../../../../assets/images/hero-1.png";
import shape from "./../../../../assets/svg/ellipse.svg";
import Button from "../../../../components/button/Button";

function Hero() {
  return (
    <div className={`${styles.hero} container`}>
      <div className={styles.shapes}>
        <img className={styles["shapes-ellipse"]} src={shape} alt="" />
      </div>
      <div className={styles.text}>
        <div>
          <h1>Discover the Richness of Morocco</h1>
          <h3>Authentic Moroccan Products, Just a Click Away</h3>
          <p>
            Explore a world of handmade crafts, exquisite textiles, flavorful
            spices, and more, all from the heart of Morocco. Your journey begins
            here.
          </p>
        </div>
        <Button href="/register" className={["primary", "large"]}>
          <span>shop now</span> <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </div>
      <div className={styles.img}>
        <img src={HeroImg0} alt="products" />
        <img src={HeroImg1} alt="products" />
      </div>
    </div>
  );
}

export default Hero;
