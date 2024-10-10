import React, { useState } from 'react';
import Link from 'next/link';
import styles from './SequentialBoxMorphingPage.module.scss';
import BoxHead from '../SpinnerHeads/BoxHead';
import CopyBtn from '../common/copyBtn';

const SeqBoxMorphPage = ({ initialValues }) => {
  const [formValues, setFormValues] = useState({
    colors: [...initialValues.colors],
  });

  const [copiedCode, setCopiedCode] = useState(
    `<BoxMorphSpinner 
        colors={[${initialValues.colors.map(color => `"${color}"`).join(', ')}]} 
    />`
  );

  const handleChange = (index, e) => {
    const newColors = [...formValues.colors];
    newColors[index] = e.target.value;
    setFormValues((prev) => ({
      ...prev,
      colors: newColors,
    }));

    // Dynamically update the copied code
    setCopiedCode(`<BoxMorphSpinner 
        colors={[${newColors.map(color => `"${color}"`).join(', ')}]} 
    />`);
  };

  return (
    <div className={styles.container}>
      {/* Left side (Spinner and buttons) */}
      <div className={styles.leftSide}>
        <div className={styles.spinnerWrapper}>
          <BoxHead colors={formValues.colors} />
          <p className={styles.spinnerText}>
            Experience the magic of the Sequential Box Morph – it's not just a transformation, it's an evolution of colors and shapes. As each box changes hue, it dances gracefully, bringing life to your loading experience. Who knew waiting could be this captivating?
          </p>
        </div>
        <div className={styles.navButtons}>
          <Link href={'/spinners/dotspinner'}>
            <button className={styles.pageBtn}>Prev</button>
          </Link>
          <Link href={`/`}>
            <button className={styles.pageBtn}>Back</button>
          </Link>
          <Link href={'/spinners/wavespinner'}>
            <button className={styles.pageBtn}>Next</button>
          </Link>
        </div>
      </div>

      {/* Right side (Name, description, code, and form) */}
      <div className={styles.rightSide}>
        <h1>SEQUENTIAL BOX MORPH</h1>
        <h2>AN EVOLUTION OF COLORS,<br />A DANCE OF SHAPES.</h2>

        <div className={styles.generatedPropsContainer}>
          <p>{copiedCode}</p>
          <CopyBtn textToCopy={copiedCode} theme="dark"/>
        </div>

        <form>
          {formValues.colors.map((color, index) => (
            <div key={index} className={styles.inputField}>
              <label>{`Box ${index + 1} Color: `}</label>
              <input
                className={styles.input}
                type="text"
                value={color}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default SeqBoxMorphPage;
