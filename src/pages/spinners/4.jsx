import React, { useState } from "react";
import Link from "next/link";
import styles from "./1.module.scss";
import { Wave } from "./Wave";

function WavePage() {
  const [copiedCode, setCopiedCode] = useState("");
  const [formValues, setFormValues] = useState({
    size: "60",
    colors: ["pink", "#EAE0D5"],
    opacity: 1,
    speed: "2s",
  });

  // Handle changes for color inputs
  const handleColorChange = (index, e) => {
    const newColors = [...formValues.colors]; // Copy current colors
    newColors[index] = e.target.value; // Update specific color
    setFormValues((prevValues) => ({
      ...prevValues,
      colors: newColors,
    }));
  };

  // Handle changes for size, opacity, and speed inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value, // Update the specific property
    }));
  };

  const handleCopyComponent = () => {
    const componentString = `<Wave
    colors={[${formValues.colors.map((color) => `"${color}"`).join(", ")}]} 
    size="${formValues.size}"
    opacity="${formValues.opacity}"
    speed="${formValues.speed}"
    />`;
    setCopiedCode(componentString);
    navigator.clipboard.writeText(componentString);
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <Wave
          color={formValues.colors}
          size={formValues.size}
          opacity={formValues.opacity}
          speed={formValues.speed}
        />
      </div>
      <div className={styles.form}>
        <form className={styles.inputField}>
          {formValues.colors.map((color, index) => (
            <div key={index}>
              <label>Color {index + 1}</label>
              <input
                type="text"
                name={`color${index + 1}`}
                placeholder={`Color for Box ${index + 1}`}
                onChange={(e) => handleColorChange(index, e)}
                value={color}
              />
            </div>
          ))}
          <div>
            <label>Size</label>
            <input
              type="number"
              name="size"
              value={formValues.size}
              onChange={handleInputChange}
              placeholder="Size of wave"
            />
          </div>
          <div>
            <label>Opacity</label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="1"
              name="opacity"
              value={formValues.opacity}
              onChange={handleInputChange}
              placeholder="Opacity of wave"
            />
          </div>
          <div>
            <label>Speed</label>
            <input
              type="text"
              name="speed"
              value={formValues.speed}
              onChange={handleInputChange}
              placeholder="Speed of wave (e.g., '2s')"
            />
          </div>
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

export default WavePage;
