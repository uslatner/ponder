// components/Spinners/SeqBoxMorphPage.jsx
import React, { useState } from "react";
import { SequentialBoxMorphing } from "./SpinnerComponents/SequentialBoxMorphing";
import styles from "../../pages/spinners/1.module.scss"; // Adjust path

function SeqBoxMorphPage({ initialValues }) {
  const [formValues, setFormValues] = useState({
    colors: [...initialValues.colors],
  });

  const handleChange = (index, e) => {
    const newColors = [...formValues.colors];
    newColors[index] = e.target.value;
    setFormValues((prev) => ({
      ...prev,
      colors: newColors,
    }));
  };

  return (
    <div className={styles.container}>
      <SequentialBoxMorphing colors={formValues.colors} />
      <form>
        {formValues.colors.map((color, index) => (
          <div key={index}>
            <label>Box {index + 1} Color</label>
            <input
              type="text"
              value={color}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        ))}
      </form>
    </div>
  );
}

export default SeqBoxMorphPage;
