import React, { useState } from "react";
import styles from "./WavePage.module.scss";
import WaveHead from "../SpinnerHeads/WaveHead";
import CopyBtn from "../common/copyBtn";
import Link from "next/link";

const WavePage = ({ initialValues }) => {
  const [formValues, setFormValues] = useState({
    color1: initialValues.color1,
    color2: initialValues.color2,
    size: initialValues.size,
    speed: initialValues.speed,
    opacity: initialValues.opacity
  });

  const [copiedCode, setCopiedCode] = useState(
    `<Wave
        color1="${initialValues.color1}"
        color2="${initialValues.color2}"
        size="${initialValues.size}"
        speed="${initialValues.speed}"
        opacity="${initialValues.opacity}"
    />`
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      // Update the copied code with new form values
      setCopiedCode(
        `<Wave
        color1="${updatedValues.color1}"
        color2="${updatedValues.color2}"
        size="${updatedValues.size}"
        speed="${updatedValues.speed}"
        opacity="${updatedValues.opacity}"
    />`);
      return updatedValues;
    });
  };

  return (
    <div className={styles.container}>
      {/* Left side (Spinner and buttons) */}
      <div className={styles.leftSide}>
        <div className={styles.spinnerWrapper}>
          <WaveHead
            color1={formValues.color1}
            color2={formValues.color2}
            size={formValues.size}
            opacity={formValues.opacity}
            speed={formValues.speed}
          />
          <p className={styles.spinnerText}>
            Experience the mesmerizing waves as they dance across the screen, creating a rhythmic flow that captivates and calms. Each wave is a symphony of colors and movement, designed to enhance your visual experience.
          </p>
        </div>
        <div className={styles.navButtons}>
          <Link href={'/spinners/pulsebox'}>
            <button className={styles.pageBtn}>Prev</button>
          </Link>
          <Link href={`/`}>
            <button className={styles.pageBtn}>Back</button>
          </Link>
          <Link href={'/spinners/circles'}>
            <button className={styles.pageBtn}>Next</button>
          </Link>
        </div>
      </div>

      {/* Right side (Name, description, code, and form) */}
      <div className={styles.rightSide}>
        <h1>WAVE</h1>
        <h2>RHYTHMIC MOTION,<br />A SEA OF COLORS.</h2>

        <div className={styles.generatedPropsContainer}>
          <p>{copiedCode}</p>
          <CopyBtn textToCopy={copiedCode} theme="dark"/>
        </div>

        <form>
        <div className={styles.inputField}>
            <label>Color1 </label>
            <input
              className={styles.input}
              type="text"
              name="color1"
              placeholder="color1"
              onChange={handleChange}
              value={formValues.color1}
            />
          </div>

          <div className={styles.inputField}>
            <label>Color2 </label>
            <input
              className={styles.input}
              type="text"
              name="color2"
              placeholder="color2"
              onChange={handleChange}
              value={formValues.color2}
            />
          </div>
          
          <div className={styles.inputField}>
            <label>Size: </label>
            <input
              className={styles.input}
              type="number"
              name="size"
              placeholder="Size of wave"
              onChange={handleChange}
              value={formValues.size}
            />
          </div>
          <div className={styles.inputField}>
            <label>Opacity: </label>
            <input
              className={styles.input}
              type="number"
              step="0.1"
              min="0"
              max="1"
              name="opacity"
              placeholder="Opacity of wave"
              onChange={handleChange}
              value={formValues.opacity}
            />
          </div>
          <div className={styles.inputField}>
            <label>Speed: </label>
            <input
              className={styles.input}
              type="text"
              name="speed"
              placeholder="Speed of wave (e.g., '2s')"
              onChange={handleChange}
              value={formValues.speed}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default WavePage;
