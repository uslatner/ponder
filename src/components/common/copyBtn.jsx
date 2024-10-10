import React, { useState } from 'react';
import Image from 'next/image';
import copyIcon from '../../assets/copyDark.svg';
import copiedIcon from '../../assets/copiedDark.svg';
import styles from './copyBtn.module.scss'; // Optional: You can style it separately

const CopyBtn = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);

    // Reset to the copy icon after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <button className={styles.copyButton} onClick={handleCopy}>
      {isCopied ? (
        <Image src={copiedIcon} alt="Copied" width={24} height={24} />
      ) : (
        <Image src={copyIcon} alt="Copy" width={24} height={24} />
      )}
    </button>
  );
};

export default CopyBtn;
