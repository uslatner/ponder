// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image";
import styles from "./PulseBoxHead.module.scss";

import cloudneck03 from '../../assets/cloudneck03.svg';
import { PulseBox } from "@holmesdev/ponder-spinners";

const PulseBoxHead = ({color1, color2, color3, color4}) => {
  return (
    <div className={styles.spinner}>
      <div className={styles.imageWrapper}>
        <Image
          src={cloudneck03}
          alt="Oblak Background"
          className={styles.oblakImage}
          layout="responsive"
          width={150}
          height={150}
        />

        {/* Render the SpinnerComponent with the new class */}
        {PulseBox && (
          <div className={styles.spinnerComponent}>
            <PulseBox
              color1={color1}
              color2={color2}
              color3={color3}
              color4={color4}/>
          </div>
        )}
      </div>

    </div>
  );
};

export default PulseBoxHead;
