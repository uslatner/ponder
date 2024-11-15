import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './DotsPage.module.scss';
import DotsHead from '../SpinnerHeads/DotsHead';
import CopyBtn from '../common/copyBtn';

const DotsPage = ({ initialValues }) => {
  const [formValues, setFormValues] = useState({
    color1: initialValues.color1,
    color2: initialValues.color2,
    color3: initialValues.color3
  });

  const [copiedCode, setCopiedCode] = useState(
    `<Dots 
        color1="${initialValues.color1}"
        color2="${initialValues.color2}"
        color3="${initialValues.color3}"
    />`
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      // Update the copied code with new form values
      setCopiedCode(
        `<Dots
        color1="${updatedValues.color1}"
        color2="${updatedValues.color2}"
        color3="${updatedValues.color3}"
    />`);
      return updatedValues;
    });
  };

  return (
    <div className={styles.container}>
      {/* Left side (Spinner and buttons) */}
      <div className={styles.leftSide}>
        <div className={styles.spinnerWrapper}>
        <DotsHead
            color1={formValues.color1}
            color2={formValues.color2}
            color3={formValues.color3}
            />
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
          <Link href={'/spinners/pulsebox'}>
            <button className={styles.pageBtn}>Next</button>
          </Link>
        </div>
      </div>

      {/* Right side (Name, description, code, and form) */}
      <div className={styles.rightSide}>
        <h1>DOTS</h1>
        <h2>SPINNING IN COLOR,<br />A DANCE OF DOTS.</h2>

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
        </form>
      </div>
    </div>
  );
};

export default DotsPage;
