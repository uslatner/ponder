// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image";
import styles from "./CircularHead.module.scss";

import cloudneck01 from '../../assets/cloudwneck01.svg';
import CircularSpinner from "../Spinners/SpinnerComponents/CircularSpinner";

const CircularHead = () => {
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
            <CircularSpinner />
          </div>
        )}
      </div>

    </div>
  );
};

export default CircularHead;
