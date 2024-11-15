import React, { useState } from 'react';
import Link from 'next/link';
import styles from './PulseBoxPage.module.scss';
import PulseBoxHead from '../SpinnerHeads/PulseBoxHead';
import CopyBtn from '../common/copyBtn';
import { PulseBox } from '@holmesdev/ponder-spinners';

const PulseBoxPage = ({ initialValues }) => {
  const [formValues, setFormValues] = useState({
    color1: initialValues.color1,
    color2: initialValues.color2,
    color3: initialValues.color3,
    color4: initialValues.color4
  });

  const [copiedCode, setCopiedCode] = useState(
    `<PulseBox 
        color1="${initialValues.color1}"
        color2="${initialValues.color2}"
        color3="${initialValues.color3}"
        color4="${initialValues.color4}"
    />`
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      // Update the copied code with new form values
      setCopiedCode(
        `<PulseBox 
        color1="${updatedValues.color1}"
        color2="${updatedValues.color2}"
        color3="${updatedValues.color3}"
        color4="${updatedValues.color4}"
    />`);
      return updatedValues;
    });
  };

  return (
    <div className={styles.container}>
      {/* Left side (Spinner and buttons) */}
      <div className={styles.leftSide}>
        <div className={styles.spinnerWrapper}>
          <PulseBoxHead 
            color1={formValues.color1}
            color2={formValues.color2}
            color3={formValues.color3}
            color4={formValues.color4} 
            />
          <p className={styles.spinnerText}>
            Experience the magic of the Sequential Box Morph – it's not just a transformation, it's an evolution of colors and shapes. As each box changes hue, it dances gracefully, bringing life to your loading experience. Who knew waiting could be this captivating?
          </p>
        </div>
        <div className={styles.navButtons}>
          <Link href={'/spinners/dots'}>
            <button className={styles.pageBtn}>Prev</button>
          </Link>
          <Link href={`/`}>
            <button className={styles.pageBtn}>Back</button>
          </Link>
          <Link href={'/spinners/wave'}>
            <button className={styles.pageBtn}>Next</button>
          </Link>
        </div>
      </div>

      {/* Right side (Name, description, code, and form) */}
      <div className={styles.rightSide}>
        <h1>PULSE BOX</h1>
        <h2>AN EVOLUTION OF COLORS,<br />A DANCE OF SHAPES.</h2>

        <div className={styles.generatedPropsContainer}>
          <p>{copiedCode}</p>
          <CopyBtn textToCopy={copiedCode} theme="dark"/>
        </div>

        <form>
          <div className={styles.inputField}>
            <label>Color1 </label>
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
            <label>Color2 </label>
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
            <label>Color3 </label>
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
            <label>Color4 </label>
            <input
              className={styles.input}
              type="text"
              name="color4"
              placeholder="color4"
              onChange={handleChange}
              value={formValues.color4}
            />
          </div>

        </form>
      </div>
    </div>
  );
};

export default PulseBoxPage;
