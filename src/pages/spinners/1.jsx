import Image from "next/image"; // Import Image from Next.js
import styles from "./1.module.scss";

import React, { useState } from "react";
import { CircularSpinner } from "./CircularSpinner";

import cloudwneck01 from "../../assets/cloudwneck01.svg";
import Link from "next/link";

function CircularPage() {
  const [formValues, setFormValues] = useState({
    color1: "blue",

    color2: "green",
    opacity1: 0.5,
    opacity2: 1,
    direction: "-360deg",
    speed: "1s",
  });
  const [copiedCode, setCopiedCode] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleCopyComponent = () => {
    const componentString = `<CircularSpinner 
      color1="${formValues.color1}" 
      color2="${formValues.color2}" 
      
      direction="${formValues.direction}" 
      opacity1="${formValues.opacity1}" 
      opacity2="${formValues.opacity2}" 
      speed="${formValues.speed}" 
    />`;
    setCopiedCode(componentString);

    navigator.clipboard.writeText(componentString);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
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
      <div className={styles.form}>
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
          <button type="button" onClick={() => handleCopyComponent()}>
            Generate your props
          </button>
        </form>
        {copiedCode && (
          <p className={styles.generatedPropsContainer}>{copiedCode}</p>
        )}
        <div>
          <Link href={`/`}>
            <button>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CircularPage;
