import React, { useState } from 'react';
import styles from "./CircularPage.module.scss";
import CircularHead from "../SpinnerHeads/CircularHead";
import CopyBtn from "../common/copyBtn";
import Link from 'next/link';

const CircularPage = ({ initialValues }) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [copiedCode, setCopiedCode] = useState(
    `<Spin
        color1="${initialValues.color1}" 
        color2="${initialValues.color2}" 
        direction="${initialValues.direction}" 
        opacity1="${initialValues.opacity1}" 
        opacity2="${initialValues.opacity2}" 
        speed="${initialValues.speed}" 
        size="${initialValues.size}" 
    />`
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      setCopiedCode(generateCode(updatedValues));
      return updatedValues;
    });
  };

  const handleDirectionChange = (direction) => {
    // Simulate form input change when buttons are clicked
    handleChange({
      target: {
        name: 'direction',
        value: direction
      }
    });
  };

  const generateCode = (updatedValues) => {
    return `<Spin
      color1="${updatedValues.color1}" 
      color2="${updatedValues.color2}" 
      direction="${updatedValues.direction}" 
      opacity1="${updatedValues.opacity1}" 
      opacity2="${updatedValues.opacity2}" 
      speed="${updatedValues.speed}"
      size="${updatedValues.size}" 
    />`;
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
            size={formValues.size}
          />
          <p className={styles.spinnerText}>
            Meet Spin – the zen master of loading spinners! As it gracefully whirls, it’s like watching calm in motion, bringing a sense of balance to your wait time. Spin isn’t just a loading icon; it’s a moment of quiet reflection, wrapped in code.
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
          <CopyBtn textToCopy={copiedCode} theme="dark" />
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
            <div className={styles.buttonGroup}>
              <button
                type="button"
                className={formValues.direction === '360deg' ? styles.activeButton : styles.button}
                onClick={() => handleDirectionChange('360deg')}
              >
                clockwise
              </button>
              <button
                type="button"
                className={formValues.direction === '-360deg' ? styles.activeButton : styles.button}
                onClick={() => handleDirectionChange('-360deg')}
              >
                anticlockwise
              </button>
            </div>
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
          <div className={styles.inputField}>
            <label>Size: </label>
            <input className={styles.input}
              type="text"
              name="size"
              placeholder="size"
              onChange={handleChange}
              value={formValues.size}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CircularPage;
