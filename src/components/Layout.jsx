import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./layout.module.scss"; // Import your CSS module

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;