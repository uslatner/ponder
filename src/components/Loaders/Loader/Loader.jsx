import React from "react";
import Image from "next/image"; // Import Image from Next.js
import styles from "./Loader.module.scss"; // Adjust path as necessary

const Loader = ({ imageSrc, altText, text, cloudImageSrc }) => {
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

        <Image
          src={imageSrc}
          alt={altText}
          className={styles.spinnerImage}
          layout="responsive"
          width={50}
          height={50}
        />
      </div>

      <div className={styles.form}>
        <p className={styles.spinnerText}>{text}</p>
      </div>
    </div>
  );
};

export default Loader;
