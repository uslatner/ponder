// components/Navbar.js
import Image from 'next/image';
import styles from '../components/Navbar.module.scss';
import logosq from '../assets/logosq.png';

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image 
          src={logosq} 
          alt="logo" 
          fill
          className={styles.logoImage} 
        />
      </div>
      <div className={styles.links}>
        <a href="#working-example">Working Example</a>
        <a href="https://github.com/DBUG-DINGOES/customised-spinners">GitHub</a>
        <a href="https://github.com/DBUG-DINGOES/customised-spinners">Docs</a>
      </div>
    </nav>
  );
}
