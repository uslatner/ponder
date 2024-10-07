import React from "react";
import Loader from "./Loader";
import styles from "./LoadersGrid.module.scss";
import Link from "next/link";

const SpinnersGrid = ({ spinners }) => {
  return (
    <div className={styles.grid}>
      {spinners.map((spinner, index) => (
        <div key={index}> {/* Move key here for the outer div */}
          <Loader
            imageSrc={spinner.imageSrc}
            altText={spinner.altText}
            text={spinner.text}
            cloudImageSrc={spinner.cloudImageSrc}
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
