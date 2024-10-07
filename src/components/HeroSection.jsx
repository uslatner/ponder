// components/HeroSection.js
import styles from "../components/HeroSection.module.scss";
import Image from "next/image";
import heroPic from "../assets/heroPic.svg";
import { useState } from "react";

export default function HeroSection() {
  const textToCopy = "npm install Ponder";
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 4000);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroImg}>
          <Image src={heroPic} alt="PonderLogoHeroImg" fill />
        </div>
      </div>

      <div className={styles.content}>
        <h1>PONDER THE POSSIBILITIES</h1>
        <p className={styles.description}>
          Build highly customizable and efficient spinner components with React,
          generating real CSS files during the build process. Utilize dynamic,
          prop-based styling to control spinner animations and appearance, which
          are automatically transpiled to CSS variables. This approach ensures
          optimal performance and a clean separation of concerns, all while
          maintaining productivity with full support for source maps and
          linting.
        </p>
        <div className={styles.buttonWrapper}>
          <div>
            <a
              href="https://github.com/DBUG-DINGOES/customised-spinners"
              className={styles.getStartedBtn}
            >
              Get Started
            </a>
          </div>
          <button className={styles.getStartedBtn} onClick={copyToClipboard}>
            {isCopied ? "npm install Ponder ✔" : "npm install Ponder"}
          </button>
        </div>
      </div>
    </section>
  );
}
