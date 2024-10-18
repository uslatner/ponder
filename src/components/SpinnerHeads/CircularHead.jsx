// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image";
import styles from "./CircularHead.module.scss";

import cloudneck01 from '../../assets/cloudwneck01.svg';
import CircularSpinner from "../SpinnerComponents/CircularSpinner";

const CircularHead = ({ color1, color2, direction, opacity1, opacity2, speed }) => {
  return (
    <div className={styles.spinner}>
      <div className={styles.imageWrapper}>
        <Image
          src={cloudneck01}
          alt="Oblak Background"
          className={styles.oblakImage}
          layout="responsive"
          width={150}
          height={150}
        />

        {/* Render the SpinnerComponent with the new class */}
        {CircularSpinner && (
          <div className={styles.spinnerComponent}>
            <CircularSpinner 
              color1={color1}
              color2={color2}
              direction={direction}
              opacity1={opacity1}
              opacity2={opacity2}
              speed={speed}
            />
          </div>
        )}
      </div>

    </div>
  );
};

export default CircularHead;
