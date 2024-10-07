import React, { useState } from "react";
import Link from "next/link";
import styles from "./1.module.scss";

import { DotSpinner } from "./DotSpinner";

import Image from "next/image";
import cloudwneck01 from "../../assets/cloudwneck01.svg";

const DotSpinner = ({ initialValues }) => {
    const [formValues, setFormValues] = useState({
      colors: [...initialValues.colors],
    });

  const handleChange = (index, e) => {
    const newColors = [...formValues.colors]; // Create a copy of the current colors
    newColors[index] = e.target.value; // Update the color at the
    setFormValues((prev) => ({
      ...prev, // Keep the other properties
      colors: newColors, // Update the colors array
    }));
  };

  const handleCopyComponent = () => {
    const componentString = `<DotSpinner 
    colors={[${formValues.colors.map((color) => `"${color}"`).join(", ")}]} 
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
          <DotSpinner colors={formValues.colors} />
        </div>
      </div>
      <div className={styles.form}>
        <form className={styles.inputField}>
          {formValues.colors.map((color, index) => (
            <div key={index}>
              <label>Color {index + 1}</label>
              <input
                    key={index}
                    type="text"
                    value={color}
                    onChange={(e) => handleChange(index, e)}
                />
            </div>
          ))}

          <button type="button" onClick={handleCopyComponent}>
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

export default DotPage;
