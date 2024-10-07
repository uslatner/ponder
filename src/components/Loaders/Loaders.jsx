// components/Loaders/Loaders.jsx
import React from "react";
import LoadersGrid from "./Loader/LoadersGrid"; // Adjust path if necessary
import styles from "./Loaders.module.scss";
import logoLine from "../../assets/logoLine.svg";
import Image from "next/image";

// Import spinners and images

import cloudwneck01 from "../../assets/cloudwneck01.svg";
import cloudwneck02 from "../../assets/cloudwneck02.svg";
import dot from "../../assets/dot.gif";
import spinnerR from "../../assets/spinnerR.gif";

export const spinnersData = [
  {
    id: 1,
    imageSrc: spinnerR,
    altText: "Spinner 1",
    text: "Introducing the Ponder Spinner – where spinning is an art form! Watch as it twirls in a perfect ballet, contemplating the meaning of life while you wait. It's not just a spinner; it's a philosophical journey wrapped in code.",
    cloudImageSrc: cloudwneck01,
  },
  {
    id: 2,
    imageSrc: dot,
    altText: "Spinner 2",
    text: "Meet the Three Dots of Destiny – they’re not just moving up and down, they’re perfecting their vertical dance routine for your entertainment. Watch them groove through loading screens, adding rhythm to your wait. Who knew loading could be this fun?",
    cloudImageSrc: cloudwneck02,
  },
  {
    id: 3,
    imageSrc: dot,
    altText: "Spinner 4",
    text: "Meet the Three Dots of Destiny – they’re not just moving up and down, they’re perfecting their vertical dance routine for your entertainment. Watch them groove through loading screens, adding rhythm to your wait. Who knew loading could be this fun?",
    cloudImageSrc: cloudwneck02,
  },
  {
    id: 3,
    imageSrc: dot,
    altText: "Spinner 4",
    text: "Meet the Three Dots of Destiny – they’re not just moving up and down, they’re perfecting their vertical dance routine for your entertainment. Watch them groove through loading screens, adding rhythm to your wait. Who knew loading could be this fun?",
    cloudImageSrc: cloudwneck02,
  },
];

const Loaders = () => {
  return (
    <div className={styles.loadersContainer}>
      <h1 className={styles.title}>Meet the Ponderers</h1>
      <LoadersGrid spinners={spinnersData} />
      <div className={styles.logoContainer}>
        <Image
          src={logoLine}
          alt="Ponder Logo"
          width={150} // Adjust width and height based on your design
          height={150}
        />
      </div>
    </div>
  );
};

export default Loaders;
