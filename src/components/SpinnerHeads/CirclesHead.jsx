// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image";
import styles from "./CirclesHead.module.scss";

import cloudneck05 from '../../assets/cloudneck05.svg';
import { Circles } from "@holmesdev/ponder-spinners";

const CirclesHead = ( {size, color1, color2, color3, duration} ) => {
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
        {Circles && (
          <div className={styles.spinnerComponent}>
            <Circles
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

export default CirclesHead;
