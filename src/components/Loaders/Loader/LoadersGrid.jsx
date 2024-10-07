// components/Loaders/LoadersGrid.jsx
import React from "react";
import Loader from "./Loader"; // Ensure this path is correct
import styles from "./LoadersGrid.module.scss";
import Link from "next/link";

const SpinnersGrid = ({ spinners }) => {
  return (
    <div className={styles.grid}>
      {spinners.map((spinner, index) => (
        <div key={index}> {/* Move key here for the outer div */}
          <Loader
            SpinnerComponent={spinner.SpinnerComponent} // Pass the SpinnerComponent
            cloudImageSrc={spinner.cloudImageSrc}
            text={spinner.text}
          />
          <Link href={spinner.link}>
            <button className={styles.customiseBtn}>Customise your own</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SpinnersGrid;
