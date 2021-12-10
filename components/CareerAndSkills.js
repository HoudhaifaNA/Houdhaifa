/* eslint-disable @next/next/no-img-element */
import styles from "../styles/CareerAndSkills.module.css";

const skills = [
  "HTML",
  "CSS",
  "SASS",
  "Javascript",
  "React",
  "Redux",
  "Next",
  "Node",
  "Express",
  "Authentication",
  "APIs",
  "Electron",
  "UI & UX",
];

const CareerAndSkills = () => {
  return (
    <div id={styles.main}>
      <div className={styles.block}>
        <h2 className={styles.heading}>My career and skills</h2>
        <p className={styles.careerText}>
          I like to challenge myself and learn new stuff every day. My career so
          far has been some SaaS products like Wejdli or uTube Polls, and
          freelancing gigs like Z-AUTO and Learning assessments game. I work
          with these technologies and I have 4 years of experience.
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
