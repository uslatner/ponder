// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image";
import styles from "./BoxHead.module.scss";

import cloudneck03 from '../../assets/cloudneck03.svg';
import SequentialBoxMorphing from "../SpinnerComponents/SequentialBoxMorphing";

const BoxHead = ({colors}) => {
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
        {SequentialBoxMorphing && (
          <div className={styles.spinnerComponent}>
            <SequentialBoxMorphing 
              colors={colors}/>
          </div>
        )}
      </div>

    </div>
  );
};

export default BoxHead;
