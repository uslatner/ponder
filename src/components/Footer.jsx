// components/Footer.js
import styles from '../components/Footer.module.scss';
import logoLine from '../assets/logoLine.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="copyright">
      &copy; 2024 Dbug Dingoes. All rights reserved.
      </div>
    </footer>
  );
}
