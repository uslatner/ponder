import React, { useState } from "react";
import Link from "next/link";
import styles from "./1.module.scss";

import { SequentialBoxMorphing, Box, Container } from "./SequentialBoxMorphing";

function BoxPage() {
  const [copiedCode, setCopiedCode] = useState("");
  const [formValues, setFormValues] = useState({
    colors: ["#2f3e46", "#e0e0e0", "#6b6252", "#ccb69b"],
  });

  const handleChange = (index, e) => {
    const newColors = [...formValues.colors]; // Create a copy of the current boxes
    newColors[index] = e.target.value; // Update the specified field
    setFormValues((prev) => ({
      ...prev, // Keep the other properties
      colors: newColors, // Update the boxes array
    }));
  };
  console.log(formValues);

  const handleCopyComponent = () => {
    const componentString = `<SequentialBoxMorphing
    colors={[${formValues.colors.map((color) => `"${color}"`).join(", ")}]} 
    />`;
    setCopiedCode(componentString);
    navigator.clipboard.writeText(componentString);
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <SequentialBoxMorphing colors={formValues.colors} />
      </div>
      <div className={styles.form}>
        <form className={styles.inputField}>
          {formValues.colors.map((color, index) => (
            <div key={index}>
              <label>Box {index + 1} Color</label>
              <input
                type="text"
                name={`color${index + 1}`}
                placeholder={`Color for Box ${index + 1}`}
                onChange={(e) => handleChange(index, e)}
                value={color}
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

export default BoxPage;
