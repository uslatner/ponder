// components/Loaders/Loader.jsx
import React from "react";
import Image from "next/image"; // Import Image from Next.js
import styles from "./Loader.module.scss"; // Adjust path as necessary

const Loader = ({ SpinnerComponent, text, ...props }) => {
  return (
    <div className={styles.spinner}>
      <div className={styles.imageWrapper}>

        {/* Render the SpinnerComponent with the new class */}
        {SpinnerComponent && (
          <div>
            <SpinnerComponent {...props}/>
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
