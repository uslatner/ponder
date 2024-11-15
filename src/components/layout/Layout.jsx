import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Layout.module.scss";

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