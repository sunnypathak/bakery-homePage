import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.bannerImg}
        alt="banner"
        src="https://img.freepik.com/free-vector/hand-drawn-engraved-bakery-banner_23-2149391220.jpg?w=2000&t=st=1681365372~exp=1681365972~hmac=03237caca0f64ba51e6708602db82ed7842380cb96c5bc99dc3a4fb963c4069c"
      />
    </div>
  );
};

export default Banner;
