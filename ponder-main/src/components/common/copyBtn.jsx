import React, { useState } from 'react';
import Image from 'next/image';
import copyDarkIcon from '../../assets/copyDark.svg';
import copiedDarkIcon from '../../assets/copiedDark.svg';
import copyLightIcon from '../../assets/copyLight.svg';
import copiedLightIcon from '../../assets/copiedLight.svg';
import styles from './copyBtn.module.scss';

const CopyBtn = ({ textToCopy, theme = 'light' }) => {
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
        <Image
          src={theme === 'dark' ? copiedDarkIcon : copiedLightIcon}
          alt="Copied"
          width={18}
          height={18}
        />
      ) : (
        <Image
          src={theme === 'dark' ? copyDarkIcon : copyLightIcon}
          alt="Copy"
          width={18}
          height={18}
        />
      )}
    </button>
  );
};

export default CopyBtn;
