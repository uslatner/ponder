// components/Loaders/Loaders.jsx
import React from "react";
import LoadersGrid from "./Loader/LoadersGrid"; // Adjust path if necessary
import styles from "./Loaders.module.scss";
import logoLine from "../../assets/logoLine.svg";
import Image from "next/image";

// Import spinner heads
import CircularHead from "../SpinnerHeads/CircularHead";
import DotHead from "../SpinnerHeads/DotHead";
import BoxHead from "../SpinnerHeads/BoxHead";
import WaveHead from "../SpinnerHeads/WaveHead";
import MovingCirclesHead from '../SpinnerHeads/MovingCirclesHead';

export const spinnersData = [
  {
    id: 1,
    SpinnerComponent: CircularHead,
    altText: "Spinner 1",
    text: "Introducing the Ponder Spinner – where spinning is an art form! Watch as it twirls in a perfect ballet, contemplating the meaning of life while you wait. It's not just a spinner; it's a philosophical journey wrapped in code.",
    link: "/spinners/circularspinner",
  },
  {
    id: 2,
    SpinnerComponent: DotHead,
    altText: "Spinner 2",
    text: "Meet the Three Dots of Destiny – they’re not just moving up and down, they’re perfecting their vertical dance routine for your entertainment. Watch them groove through loading screens, adding rhythm to your wait. Who knew loading could be this fun?",
    link: "/spinners/dotspinner",
  },
  {
    id: 3,
    SpinnerComponent: BoxHead,
    altText: "Spinner 4",
    text: "Meet the Three Dots of Destiny – they’re not just moving up and down, they’re perfecting their vertical dance routine for your entertainment. Watch them groove through loading screens, adding rhythm to your wait. Who knew loading could be this fun?",
    link: "/spinners/seqboxmorph",
  },
  {
    id: 4,
    SpinnerComponent: WaveHead,
    altText: "Spinner 4",
    text: "Meet the Three Dots of Destiny – they’re not just moving up and down, they’re perfecting their vertical dance routine for your entertainment. Watch them groove through loading screens, adding rhythm to your wait. Who knew loading could be this fun?",
    link: "/spinners/wavespinner",
  },
  {
    id: 5,
    SpinnerComponent: MovingCirclesHead,
    altText: "Spinner 5",
    text: "The Juggling Trio – These three dots aren't just spinning, they're juggling in perfect sync! As they grow, shrink, and twirl, they hold your attention with their rhythmic dance. Whether you're waiting or just watching, this trio turns loading into a mini performance.",
    link: "/spinners/dotcirclesspinner",
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
