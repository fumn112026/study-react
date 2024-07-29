import { Inter } from "next/font/google";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";

const inter = Inter({ subsets: ["latin"] });

const About = () => {
  return (
    <>
      <Header page="About" />
      <main className={`${styles.main} ${inter.className}`}></main>
    </>
  );
};

export default About;
