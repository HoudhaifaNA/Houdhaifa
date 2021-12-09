/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageBG}>
        <Image
          src="/header-image.png"
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
              href="https://twitter.com/houdhaifalebbad"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
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
          A Fullstack web developer loves to create product that help people’s
          everyday life
        </h1>
        <h2 className={styles.secondaryTitle}>
          I am Houdhaifa, a 21 year old self-taught Javascript Developer,
          currently living in Algeria. Fireship.io is a gateway drug for
          developers who want to build awesome web & mobile apps.
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
