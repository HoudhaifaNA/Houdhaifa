/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageBG}>
        <Image
          src="/header-image.webp"
          alt="Houdhaifa Lebbad"
          width="1045"
          height="992"
          layout="responsive"
        />
      </div>

      <nav className={styles.navbar}>
        <h2 className={styles.name}>Houdhaifa Lebbad</h2>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a
              href="https://github.com/HoudhaifaNA"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="https://www.linkedin.com/in/houdhaifalebbad/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="mailto:houdhaifalebbad@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.heading}>
        <h1 className={styles.primaryTitle}>
          A Fullstack web developer who creates products that help people’s
          everyday life
        </h1>
        <h2 className={styles.secondaryTitle}>
          I am Houdhaifa, a fullstack web Developer. I create affordable and
          great-quality websites and web apps that help businesses grow and get
          more clients.
        </h2>
        <button
          style={{ backgroundColor: "#000", color: "#FFF", width: "10rem" }}
          className={`${styles.button} button`}
          onClick={() => window.scrollTo(0, 1050)}
        >
          View work
        </button>
      </div>
    </header>
  );
};

export default Header;
