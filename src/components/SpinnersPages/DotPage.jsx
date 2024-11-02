import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './DotPage.module.scss';
import DotHead from '../../components/SpinnerHeads/DotHead';
import CopyBtn from '../common/copyBtn';

const DotPage = ({ initialValues }) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [copiedCode, setCopiedCode] = useState(
    `<DotSpinner 
        colors={[${initialValues.colors.map(color => `"${color}"`).join(', ')}]} 
    />`
  );

  const handleChange = (index, e) => {
    const newColors = [...formValues.colors]; // Create a copy of the current colors
    newColors[index] = e.target.value; // Update the color at the index
    setFormValues((prev) => ({
      ...prev, // Keep the other properties
      colors: newColors, // Update the colors array
    }));

    // Dynamically update the copied code
    setCopiedCode(`<DotSpinner 
        colors={[${newColors.map(color => `"${color}"`).join(', ')}]} 
    />`);
  };

  return (
    <div className={styles.container}>
      {/* Left side (Spinner and buttons) */}
      <div className={styles.leftSide}>
        <div className={styles.spinnerWrapper}>
          <DotHead colors={formValues.colors} />
          <p className={styles.spinnerText}>
          Meet the Three Dots of Destiny – they’re not just moving up and down, they’re perfecting their vertical dance routine for your entertainment. Watch them groove through loading screens, adding rhythm to your wait. Who knew loading could be this fun?
          </p>
        </div>
        <div className={styles.navButtons}>
          <Link href={'/spinners/spin'}>
            <button className={styles.pageBtn}>Prev</button>
          </Link>
          <Link href={`/`}>
            <button className={styles.pageBtn}>Back</button>
          </Link>
          <Link href={'/spinners/seqboxmorph'}>
            <button className={styles.pageBtn}>Next</button>
          </Link>
        </div>
      </div>

      {/* Right side (Name, description, code, and form) */}
      <div className={styles.rightSide}>
        <h1>DOT SPINNER</h1>
        <h2>SPINNING IN COLOR,<br />A DANCE OF DOTS.</h2>

        <div className={styles.generatedPropsContainer}>
          <p>{copiedCode}</p>
          <CopyBtn textToCopy={copiedCode} theme="dark"/>
        </div>

        <form>
          {formValues.colors.map((color, index) => (
            <div key={index} className={styles.inputField}>
              <label>{`Color ${index + 1}: `}</label>
              <input className={styles.input}
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

export default DotPage;
