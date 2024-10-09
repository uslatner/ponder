import Image from "next/image";
import styles from "../../pages/spinners/1.module.scss";
import React, { useState } from "react";
import { CircularSpinner } from "./SpinnerComponents/CircularSpinner";
import cloudwneck01 from "../../assets/cloudwneck01.svg";
import Link from "next/link";

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
  
  const [copyButtonText, setCopyButtonText] = useState("Copy Code"); // State for button text

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

  const handleCopyComponent = () => {
    navigator.clipboard.writeText(copiedCode);
    setCopyButtonText("Copied");
    
    // Reset button text after 2 seconds
    setTimeout(() => {
      setCopyButtonText("Copy Code");
    }, 2000);
  };

  return (
    <div className={styles.container}>
      {/* Left side (Spinner and buttons) */}
      <div className={styles.leftSide}>
        <div className={styles.spinnerWrapper}>
          <Image
            src={cloudwneck01}
            alt="Oblak Background"
            className={styles.oblakImage}
            layout="responsive"
            width={150}
            height={150}
          />
          <div className={styles.spinnerComponent}>
            <CircularSpinner
              color1={formValues.color1}
              color2={formValues.color2}
              direction={formValues.direction}
              opacity1={formValues.opacity1}
              opacity2={formValues.opacity2}
              speed={formValues.speed}
            />
          </div>
        </div>
        <div className={styles.navButtons}>
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>

      {/* Right side (Name, description, code, and form) */}
      <div className={styles.rightSide}>
        <h1>Circular Spinner</h1>
        <p>Short description of the spinner goes here.</p>

        <p className={styles.generatedPropsContainer}>{copiedCode}</p>
        <button className={styles.copyButton} onClick={handleCopyComponent}>
          {copyButtonText} {/* Show current button text */}
        </button>

        <form className={styles.inputField}>
          <div>
            <label>Color 1</label>
            <input
              type="text"
              name="color1"
              placeholder="color1"
              onChange={handleChange}
              value={formValues.color1}
            />
          </div>
          <div>
            <label>Color 2</label>
            <input
              type="text"
              name="color2"
              placeholder="color2"
              onChange={handleChange}
              value={formValues.color2}
            />
          </div>
          <div>
            <label>Opacity 1</label>
            <input
              type="text"
              name="opacity1"
              placeholder="opacity1"
              onChange={handleChange}
              value={formValues.opacity1}
            />
          </div>
          <div>
            <label>Opacity 2</label>
            <input
              type="text"
              name="opacity2"
              placeholder="opacity2"
              onChange={handleChange}
              value={formValues.opacity2}
            />
          </div>
          <div>
            <label>Direction</label>
            <input
              type="text"
              name="direction"
              placeholder="direction"
              onChange={handleChange}
              value={formValues.direction}
            />
          </div>
          <div>
            <label>Speed</label>
            <input
              type="text"
              name="speed"
              placeholder="speed"
              onChange={handleChange}
              value={formValues.speed}
            />
          </div>
        </form>

        <div>
          <Link href={`/`}>
            <button>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CircularPage;
