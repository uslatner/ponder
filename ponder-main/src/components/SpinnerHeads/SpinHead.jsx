// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image";
import styles from "./SpinHead.module.scss";

import cloudneck01 from '../../assets/cloudwneck01.svg';
import {Spin} from "@holmesdev/ponder-spinners";

const SpinHead = ({ color1, color2, direction, opacity1, opacity2, speed, size }) => {
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
        {Spin && (
          <div className={styles.spinnerComponent}>
            <Spin
              color1={color1}
              color2={color2}
              direction={direction}
              opacity1={opacity1}
              opacity2={opacity2}
              speed={speed}
              size={size}
            />
          </div>
        )}
      </div>

    </div>
  );
};

export default SpinHead;
