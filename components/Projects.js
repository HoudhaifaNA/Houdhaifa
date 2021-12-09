import ProjectItem from "./ProjectItem";
import styles from "../styles/Projects.module.css";

const Projects = ({ list }) => {
  const renderProjects = () => {
    return list.map((pr) => {
      return <ProjectItem key={pr.slug} project={pr} />;
    });
  };
  return (
    <div id={styles.main}>
      <h2 className={styles.sectionName}>Projects</h2>
      <div className={styles.projectsList}>{renderProjects()}</div>
    </div>
  );
};

export default Projects;
