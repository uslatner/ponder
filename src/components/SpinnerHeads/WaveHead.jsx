// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image";
import styles from "./WaveHead.module.scss";

import cloudneck04 from '../../assets/cloudneck04.svg';
import Wave from "../SpinnerComponents/Wave";

const WaveHead = ( {colors, size, opacity, speed}) => {

  return (
    <div className={styles.spinner}>
      <div className={styles.imageWrapper}>
        <Image
          src={cloudneck04}
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
