// components/Navbar.js
import Image from 'next/image';
import styles from './Navbar.module.scss';
import logosq from '../../assets/logosq.png';
import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
      <Link href="/">
          <Image 
            src={logosq} 
            alt="logo" 
            fill
            className={styles.logoImage} 
          />
        </Link>
      </div>
      <div className={styles.links}>
        <a href="https://github.com/DBUG-DINGOES/customised-spinners" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://github.com/DBUG-DINGOES/customised-spinners" target="_blank" rel="noopener noreferrer">Docs</a>
      </div>
    </nav>
  );
}
