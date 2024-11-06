import styles from "./HeroSectionAboutUs.module.scss";

import Image from "next/image";
import DBUGDS from "../../assets/DBUGDS.gif";

export default function HeroSection() {

  return (
    <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroImg}>
            <Image src={DBUGDS} alt="debug logo" layout="responsive"  />
          </div>
        </div>
      <div className={styles.content}>
        <br></br>
        <h1>About Us</h1>
        <p className={styles.description}>
        We are a team of new developers just starting out. We created this website to showcase our range of spinners, and we hope you enjoy using them and adding them to your websites or apps as much as we enjoyed creating them. Our team members are Cate, Maria, DeeDee, Thao, and Urša (go check out our githubs!). We would also like to give a huge thank you to Alex Bicknell and Amberle Seidl for their inspiration, advice, and all the help they provided to us.
        </p>

      <div className={styles.githubAccounts}>
        <div>
          <h2>Our Team:</h2>
          <br />
            <a href="https://github.com/CatePobploy" target="_blank" rel="noopener noreferrer">
              <p className={styles.members}>Cate</p>
            </a>
            <a href="https://github.com/dedeepnc" target="_blank" rel="noopener noreferrer">
              <p className={styles.members}>Dedee</p>
            </a>
            <a href="https://github.com/MariaMats666" target="_blank" rel="noopener noreferrer">
              <p className={styles.members}>Maria</p>
            </a>
            <a href="https://github.com/ngthaoph" target="_blank" rel="noopener noreferrer">
              <p className={styles.members}>Thao</p>
            </a>
            <a href="https://github.com/uslatner" target="_blank" rel="noopener noreferrer">
              <p className={styles.members}>Ursa</p>
            </a>
        </div>

        <div>
          <h2>Our Incredible Mentors:</h2>
          <br />
            <a href="https://github.com/kuuzon" target="_blank" rel="noopener noreferrer">
              <p className={styles.members}>Alex</p>
            </a>
            <a href="https://github.com/Amberside" target="_blank" rel="noopener noreferrer">
              <p className={styles.members}>Amberle</p>
            </a>
            <a href="https://github.com/DanielFitzsimmons" target="_blank" rel="noopener noreferrer">
              <p className={styles.members}>Daniel</p>
            </a>
        </div>
      </div>

        </div>
    </section>
  );
}