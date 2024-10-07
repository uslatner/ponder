// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image"; // Import Image from Next.js
import styles from "./Loader.module.scss"; // Adjust path as necessary

const Loader = ({ SpinnerComponent, cloudImageSrc, text }) => {
  return (
    <div className={styles.spinner}>
      <div className={styles.imageWrapper}>
        <Image
          src={cloudImageSrc}
          alt="Oblak Background"
          className={styles.oblakImage}
          layout="responsive"
          width={150}
          height={150}
        />

        {/* Render the SpinnerComponent with the new class */}
        {SpinnerComponent && (
          <div className={styles.spinnerComponent}>
            <SpinnerComponent />
          </div>
        )}
      </div>

      <div className={styles.form}>
        <p className={styles.spinnerText}>{text}</p>
      </div>
    </div>
  );
};

export default Loader;
