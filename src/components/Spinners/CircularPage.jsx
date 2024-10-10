import React, { useState } from 'react';
import styles from "./CircularPage.module.scss";
import CircularHead from "../SpinnerHeads/CircularHead";
import CopyBtn from "../common/copyBtn";
import Link from 'next/link';

const CircularPage = ({ initialValues }) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [copiedCode, setCopiedCode] = useState(
    `<CircularSpinner 
        color1="${initialValues.color1}" 
        color2="${initialValues.color2}" 
        direction="${initialValues.direction}" 
        opacity1="${initialValues.opacity1}" 
        opacity2="${initialValues.opacity2}" 
        speed="${initialValues.speed}" 
    />`
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      // Dynamically update the code whenever the form changes
      setCopiedCode(`<CircularSpinner 
        color1="${updatedValues.color1}" 
        color2="${updatedValues.color2}" 
        direction="${updatedValues.direction}" 
        opacity1="${updatedValues.opacity1}" 
        opacity2="${updatedValues.opacity2}" 
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
          <CircularHead
            color1={formValues.color1}
            color2={formValues.color2}
            direction={formValues.direction}
            opacity1={formValues.opacity1}
            opacity2={formValues.opacity2}
            speed={formValues.speed}
          />
          <p className={styles.spinnerText}>
            Introducing the Ponder Spinner – where spinning is an art form! Watch as it twirls in a perfect ballet, contemplating the meaning of life while you wait. It's not just a spinner; it's a philosophical journey wrapped in code.
          </p>
        </div>
        <div className={styles.navButtons}>
          <button className={styles.disabled}>Prev</button>
          <Link href={`/`}>
            <button className={styles.pageBtn}>Back</button>
          </Link>
          <Link href={'/spinners/dotspinner'}>
            <button className={styles.pageBtn}>Next</button>
          </Link>
        </div>
      </div>

      {/* Right side (Name, description, code, and form) */}
      <div className={styles.rightSide}>
        <h1>CIRCULAR SPINNER</h1>
        <h2>ELEGANCE IN MOTION,<br />LIKE A BALLET DANCER TWIRLING.</h2>

        <div className={styles.generatedPropsContainer}>
          <p>{copiedCode}</p>
          <CopyBtn textToCopy={copiedCode} />
        </div>

        <form>
          <div className={styles.inputField}>
            <label>Color 1: </label>
            <input className={styles.input}
              type="text"
              name="color1"
              placeholder="color1"
              onChange={handleChange}
              value={formValues.color1}
            />
          </div>
          <div className={styles.inputField}>
            <label>Color 2: </label>
            <input className={styles.input}
              type="text"
              name="color2"
              placeholder="color2"
              onChange={handleChange}
              value={formValues.color2}
            />
          </div>
          <div className={styles.inputField}>
            <label>Opacity 1: </label>
            <input className={styles.input}
              type="text"
              name="opacity1"
              placeholder="opacity1"
              onChange={handleChange}
              value={formValues.opacity1}
            />
          </div>
          <div className={styles.inputField}>
            <label>Opacity 2: </label>
            <input className={styles.input}
              type="text"
              name="opacity2"
              placeholder="opacity2"
              onChange={handleChange}
              value={formValues.opacity2}
            />
          </div>
          <div className={styles.inputField}>
            <label>Direction: </label>
            <input className={styles.input}
              type="text"
              name="direction"
              placeholder="direction"
              onChange={handleChange}
              value={formValues.direction}
            />
          </div>
          <div className={styles.inputField}>
            <label>Speed: </label>
            <input className={styles.input}
              type="text"
              name="speed"
              placeholder="speed"
              onChange={handleChange}
              value={formValues.speed}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CircularPage;
