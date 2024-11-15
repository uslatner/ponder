// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image";
import styles from "./DotsHead.module.scss";

import cloudneck02 from '../../assets/cloudwneck02.svg';
import { Dots } from "@holmesdev/ponder-spinners";

const DotsHead = ( {color1, color2, color3} ) => {
  return (
    <div className={styles.spinner}>
      <div className={styles.imageWrapper}>
        <Image
          src={cloudneck02}
          alt="Oblak Background"
          className={styles.oblakImage}
          layout="responsive"
          width={150}
          height={150}
        />

        {/* Render the SpinnerComponent with the new class */}
        {Dots && (
          <div className={styles.spinnerComponent}>
            <Dots
              color1={color1}
              color2={color2}
              color3={color3}
            />
          </div>
        )}
      </div>

    </div>
  );
};

export default DotsHead;
