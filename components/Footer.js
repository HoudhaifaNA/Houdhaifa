/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footerText}>
        Copyright &copy; {new Date().getFullYear()} Houdhaifa Lebbad
      </h2>
    </footer>
  );
};

export default Footer;
