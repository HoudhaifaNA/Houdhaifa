/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageBG}>
        <img
          src="/header-image.png"
          alt="Houdhaifa lebbad website"
          className={styles.imageBG}
        />
      </div>

      <nav className={styles.navbar}>
        <h2 className={styles.name}>Houdhaifa Lebbad</h2>
        <ul className={styles.navList}>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Contact</li>
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
        >
          View work
        </button>
      </div>
    </header>
  );
};

export default Header;
