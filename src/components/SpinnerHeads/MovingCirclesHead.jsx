// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image";
import styles from "./MovingCirclesHead.module.scss";

import cloudneck05 from '../../assets/cloudneck05.svg';
import MovingCircles from "../SpinnerComponents/MovingCircles";

const MovingCirclesHead = ( {size, color1, color2, color3, duration} ) => {
  return (
    <div className={styles.spinner}>
      <div className={styles.imageWrapper}>
        <Image
          src={cloudneck05}
          alt="Oblak Background"
          className={styles.oblakImage}
          layout="responsive"
          width={150}
          height={150}
        />

        {/* Render the SpinnerComponent with the new class */}
        {MovingCircles && (
          <div className={styles.spinnerComponent}>
            <MovingCircles
              size = {size}
              color1 = {color1}
              color2 = {color2}
              color3 = {color3}
              duration = {duration}
            />
          </div>
        )}
      </div>

    </div>
  );
};

export default MovingCirclesHead;
