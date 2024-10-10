// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image";
import styles from "./BoxHead.module.scss";

import cloudneck01 from '../../assets/cloudwneck01.svg';
import SequentialBoxMorphing from "../Spinners/SpinnerComponents/SequentialBoxMorphing";

const BoxHead = () => {
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
        {SequentialBoxMorphing && (
          <div className={styles.spinnerComponent}>
            <SequentialBoxMorphing />
          </div>
        )}
      </div>

    </div>
  );
};

export default BoxHead;
