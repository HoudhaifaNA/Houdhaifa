import Head from "next/head";

import Header from "../components/Header";
import CareerAndSkills from "../components/CareerAndSkills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";

const Home = ({ projectsList }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Houdhaifa Lebbad's website"></meta>
        <meta
          name="keyword"
          content="Houdhaifa Lebbad, web development, web design, fullstack developer, frontend developer"
        ></meta>
        <title>Houdhaifa Lebbad</title>
      </Head>
      <main className={styles.home}>
        <Header />
        <div className={styles.line} />
        <CareerAndSkills />
        <div className={styles.line} />
        <Projects list={projectsList} />
        <Footer />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const { projectsList } = await import("./api/data.json");

  return {
    props: {
      projectsList,
    },
  };
};

export default Home;
