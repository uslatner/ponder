import React from "react";
import Loader from "./Loader";
import styles from "./LoadersGrid.module.scss";
import Link from "next/link";

const SpinnersGrid = ({ spinners }) => {
  return (
    <div className={styles.grid}>
      {spinners.map((spinner, index) => (
        <div>
          <Loader
            key={index}
            imageSrc={spinner.imageSrc}
            altText={spinner.altText}
            text={spinner.text}
            cloudImageSrc={spinner.cloudImageSrc}
          />
          <Link href={`/spinners/${index + 1}`}>
            <button>Customise your own</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SpinnersGrid;
