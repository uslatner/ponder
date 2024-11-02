// components/Loaders/Loaders.jsx
import React from "react";
import LoadersGrid from "./Loader/LoadersGrid"; // Adjust path if necessary
import styles from "./Loaders.module.scss";
import logoLine from "../../assets/logoLine.svg";
import Image from "next/image";

// Import spinner heads
import SpinHead from "../SpinnerHeads/SpinHead";
import DotsHead from "../SpinnerHeads/DotsHead";
import BoxHead from "../SpinnerHeads/BoxHead";
import WaveHead from "../SpinnerHeads/WaveHead";
import MovingCirclesHead from '../SpinnerHeads/MovingCirclesHead';

export const spinnersData = [
  {
    id: 1,
    SpinnerComponent: SpinHead,
    color1:"#FF6F61",
    color2:"#FF6F61",
    opacity1:0.5,
    opacity2:1,
    speed:"2s",
    direction:"360deg",
    size:"100",
    altText: "Spin",
    text: "Meet Spin – the zen master of loading spinners! As it gracefully whirls, it’s like watching calm in motion, bringing a sense of balance to your wait time. Spin isn’t just a loading icon; it’s a moment of quiet reflection, wrapped in code.",
    link: "/spinners/spin",
  },
  {
    id: 2,
    SpinnerComponent: DotsHead,
    colors: ["#22333B", "#FF6F61", "#B7AEA3"],
    altText: "Spinner 2",
    text: "Meet the Three Dots of Destiny – they’re not just moving up and down, they’re perfecting their vertical dance routine for your entertainment. Watch them groove through loading screens, adding rhythm to your wait. Who knew loading could be this fun?",
    link: "/spinners/dots",
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
    link: "/spinners/movingcircles",
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
