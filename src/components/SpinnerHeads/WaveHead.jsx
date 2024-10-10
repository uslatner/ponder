// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image";
import styles from "./WaveHead.module.scss";

import cloudneck01 from '../../assets/cloudwneck01.svg';
import Wave from "../Spinners/SpinnerComponents/Wave";

const WaveHead = ( {colors, size, opacity, speed}) => {

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


        {Wave && (
          <div className={styles.spinnerComponent}>
            <Wave 
              color={colors}
              size={size}
              opacity={opacity}
              speed={speed}
            />
          </div>
        )}
      </div>

    </div>
  );
};

export default WaveHead;
