// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image";
import styles from "./DotHead.module.scss";

import cloudneck02 from '../../assets/cloudwneck02.svg';
import DotSpinner from "../Spinners/SpinnerComponents/DotSpinner";

const DotHead = ( {colors} ) => {
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
        {DotSpinner && (
          <div className={styles.spinnerComponent}>
            <DotSpinner 
              colors={colors}
            />
          </div>
        )}
      </div>

    </div>
  );
};

export default DotHead;
