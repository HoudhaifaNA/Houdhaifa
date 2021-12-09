/* eslint-disable @next/next/no-img-element */
import styles from "../styles/CareerAndSkills.module.css";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Redux",
  "Next",
  "Nodejs",
  "Express",
  "Authentication",
  "UI & UX",
];

const CareerAndSkills = () => {
  return (
    <div id={styles.main}>
      <div className={styles.block}>
        <h2 className={styles.heading}>My career and skills</h2>
        <p className={styles.careerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor velit
          vestibulum, volutpat elementum sociis amet, nunc nibh. Habitasse
          suspendisse non bibendum pharetra, aliquam duis porta viverra ut.
          Augue ac semper eget at sed duis integer sed. Faucibus sed justo, et
          dui arcu enim bibendum ante vitae. Vitae ullamcorper in in tortor,
          diam. Vel sed posuere porttitor turpis lobortis senectus.
        </p>
      </div>
      <div className={`${styles.block} ${styles.skills}`}>
        {skills.map((sk) => {
          return (
            <button key={Math.random() * 99999} className={styles.skillItem}>
              {sk}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CareerAndSkills;
