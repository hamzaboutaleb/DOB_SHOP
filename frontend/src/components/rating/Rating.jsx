import filledStar from "./../../assets/svg/filled_star.svg";
import emptyStar from "./../../assets/svg/empty_star.svg";
import styles from "./styles.module.css";
import { useState } from "react";
function Rating({ value, onClick }) {
  const [rate, setRate] = useState(value);
  const [hoverRate, setHoverRate] = useState(null);

  function handleMouseOver(i) {
    setHoverRate(i);
  }
  function handleMouseOut() {
    setHoverRate(null);
  }

  const filled = new Array(5).fill(0);

  return (
    <div onMouseLeave={() => handleMouseOut()} className="rating">
      <Stars
        starsList={filled}
        rate={rate}
        hover={hoverRate}
        onMouseEnter={onClick && handleMouseOver}
        onClick={onClick}
      />
    </div>
  );
}

function Stars({
  rate,
  hover,
  starsList,
  onMouseEnter = () => {},
  onClick = () => {},
}) {
  if (hover != null) {
    return starsList.map((el, i) => {
      if (i + 1 <= hover)
        return (
          <img
            onMouseEnter={() => onMouseEnter(i + 1)}
            onClick={() => onClick(rate)}
            src={filledStar}
            alt="filled star"
            className={styles.star}
            key={i}
          />
        );
      return (
        <img
          onMouseEnter={() => onMouseEnter(i + 1)}
          onClick={() => onClick(rate)}
          src={emptyStar}
          alt="star"
          key={i}
        />
      );
    });
  }
  return starsList.map((el, i) => {
    if (i + 1 <= rate)
      return (
        <img
          onMouseEnter={() => onMouseEnter(i + 1)}
          onClick={() => onClick(rate)}
          src={filledStar}
          alt="filled star"
          className={styles.star}
          key={i}
        />
      );
    return (
      <img
        onMouseEnter={() => onMouseEnter(i + 1)}
        onClick={() => onClick(rate)}
        src={emptyStar}
        alt="star"
        key={i}
      />
    );
  });
}

export default Rating;
