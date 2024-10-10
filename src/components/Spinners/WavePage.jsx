import React, { useState } from "react";
import styles from "./WavePage.module.scss";
import WaveHead from "../SpinnerHeads/WaveHead";
import CopyBtn from "../common/copyBtn";
import Link from "next/link";

const WavePage = ({ initialValues }) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [copiedCode, setCopiedCode] = useState(
    `<Wave
      colors={[${initialValues.colors.map((color) => `"${color}"`).join(", ")}]} 
      size="${initialValues.size}"
      opacity="${initialValues.opacity}"
      speed="${initialValues.speed}"
    />`
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      // Update the code whenever the form changes
      setCopiedCode(`<Wave
        colors={[${updatedValues.colors.map((color) => `"${color}"`).join(", ")}]} 
        size="${updatedValues.size}"
        opacity="${updatedValues.opacity}"
        speed="${updatedValues.speed}"
      />`);
      return updatedValues;
    });
  };

  const handleColorChange = (index, e) => {
    const newColors = [...formValues.colors]; // Copy current colors
    newColors[index] = e.target.value; // Update specific color
    setFormValues((prevValues) => {
      const updatedValues = {
        ...prevValues,
        colors: newColors,
      };

      // Update the copiedCode with the new color values
      setCopiedCode(`<Wave
        color={[${updatedValues.colors.map((color) => `"${color}"`).join(", ")}]} 
        size="${updatedValues.size}"
        opacity="${updatedValues.opacity}"
        speed="${updatedValues.speed}"
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
            colors={formValues.colors}
            size={formValues.size}
            opacity={formValues.opacity}
            speed={formValues.speed}
          />
          <p className={styles.spinnerText}>
            Experience the mesmerizing waves as they dance across the screen, creating a rhythmic flow that captivates and calms. Each wave is a symphony of colors and movement, designed to enhance your visual experience.
          </p>
        </div>
        <div className={styles.navButtons}>
          <Link href={'/spinners/seqboxmorph'}>
            <button className={styles.pageBtn}>Prev</button>
          </Link>
          <Link href={`/`}>
            <button className={styles.pageBtn}>Back</button>
          </Link>
          <button className={styles.disabled}>Next</button>
        </div>
      </div>

      {/* Right side (Name, description, code, and form) */}
      <div className={styles.rightSide}>
        <h1>WAVE SPINNER</h1>
        <h2>RHYTHMIC MOTION,<br />A DANCE OF COLORS.</h2>

        <div className={styles.generatedPropsContainer}>
          <p>{copiedCode}</p>
          <CopyBtn textToCopy={copiedCode} theme="dark"/>
        </div>

        <form>
          {formValues.colors.map((color, index) => (
            <div className={styles.inputField} key={index}>
              <label>{`Color ${index + 1}: `}</label>
              <input
                className={styles.input}
                type="text"
                name={`color${index + 1}`}
                placeholder={`Color ${index + 1}`}
                onChange={(e) => handleColorChange(index, e)}
                value={color}
              />
            </div>
          ))}
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
