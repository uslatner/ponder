import styles from "./HeroSectionAboutUs.module.scss";

import Image from "next/image";
import DBUGDS from "../../assets/DBUGDS.gif";
import { useState } from "react";

export default function HeroSection() {
  const textToCopy = "About Us";
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 4000);
  };

  const scrollToLoaders = () => {
    document
      .getElementById("loadersSection")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.heroImg}>
            <Image src={DBUGDS} alt="" fill />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <br></br>
        <h1>About Us</h1>
        <p className={styles.description}>
          We are a team of new developers who are just starting out as new
          developers.We have created this website to showcase our range of
          Spinners for you, and we hope you enjoy using them and adding them to
          your websites or apps just as much as we did creating them our team
          members are Cate , Maria , DeeDee, Thao, Ursa and we like to give a
          huge thank you to Alex Bicknell & Amberle Seidl for the inspiration
          and advice and all the the help they provided to us.
        </p>
        <br></br>
        <h1>Our Members:</h1>
        <br></br>
        <div className={styles.copyContainer}>
          <h2>Our Member: Cate </h2>
        </div>
        <div className={styles.copyContainer}>
          <h2>Our Member: Maria</h2>
        </div>
        <div className={styles.copyContainer}>
          <h2>Our Member: DeeDee</h2>
        </div>
        <div className={styles.buttonWrapper}>
          <a href="/AboutUs2">
            <button
              className={styles.getStartedBtn}
              onClick={() => scrollToLoaders()}
            >
              Next
            </button>
          </a>
          <br></br>
          <br></br>
        </div>
      </div>
    </section>
  );
}