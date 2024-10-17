import React, { useState } from 'react';
import styles from './MovingCirclesPage.module.scss';
import MovingCirclesHead from '../SpinnerHeads/MovingCirclesHead';
import CopyBtn from '../common/copyBtn';
import Link from 'next/link';

const MovingCirclesPage = ({ initialValues }) => {
  const [formValues, setFormValues] = useState({
    size: initialValues.size || 90,
    color1: initialValues.color1 || '#FF6F61',
    color2: initialValues.color2 || '#22333B',
    color3: initialValues.color3 || '#ffa9a1',
    duration: initialValues.duration || 3,
    containerWidth: initialValues.containerWidth || 400,
    containerHeight: initialValues.containerHeight || 300,
  });

  const [copiedCode, setCopiedCode] = useState(
    `<MovingCircles 
        size={${formValues.size}} 
        color1="${formValues.color1}" 
        color2="${formValues.color2}" 
        color3="${formValues.color3}" 
        duration={${formValues.duration}}
    />`
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      // Update the copied code with new form values
      setCopiedCode(
        `<MovingCircles 
        size={${updatedValues.size}} 
        color1="${updatedValues.color1}" 
        color2="${updatedValues.color2}" 
        color3="${updatedValues.color3}" 
        duration={${updatedValues.duration}} 
    />`);
      return updatedValues;
    });
  };

  return (
    <div className={styles.container}>
      {/* Left side (Spinner and buttons) */}
      <div className={styles.leftSide}>
        <div className={styles.spinnerWrapper}>
          <MovingCirclesHead
            size={formValues.size}
            color1={formValues.color1}
            color2={formValues.color2}
            color3={formValues.color3}
            duration={formValues.duration}
            containerWidth={formValues.containerWidth}
            containerHeight={formValues.containerHeight}
          />
          <p className={styles.spinnerText}>
            The Juggling Trio – These three dots aren't just spinning, they're juggling in perfect sync! As they grow, shrink, and twirl, they hold your attention with their rhythmic dance. Whether you're waiting or just watching, this trio turns loading into a mini performance.
          </p>
        </div>
        <div className={styles.navButtons}>
          <Link href={`/spinners/wavespinner`}>
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
        <h1>MOVING CIRCLES</h1>
        <h2>VIBRANT DANCE OF GEOMETRY,<br />A PERFECT LOOP IN MOTION.</h2>

        <div className={styles.generatedPropsContainer}>
          <p>{copiedCode}</p>
          <CopyBtn textToCopy={copiedCode} theme="dark"/>
        </div>

        <form>
          <div className={styles.inputField}>
            <label>Size: </label>
            <input
              className={styles.input}
              type="number"
              name="size"
              placeholder="size"
              onChange={handleChange}
              value={formValues.size}
            />
          </div>
          <div className={styles.inputField}>
            <label>Color 1: </label>
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
            <label>Color 2: </label>
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
            <label>Color 3: </label>
            <input
              className={styles.input}
              type="text"
              name="color3"
              placeholder="color3"
              onChange={handleChange}
              value={formValues.color3}
            />
          </div>
          <div className={styles.inputField}>
            <label>Duration: </label>
            <input
              className={styles.input}
              type="number"
              name="duration"
              placeholder="duration"
              onChange={handleChange}
              value={formValues.duration}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovingCirclesPage;
