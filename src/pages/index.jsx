import { Inter } from "next/font/google";
import styles from "src/styles/Home.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { Header } from "src/components/Header";
import { Logo } from "src/components/Logo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header page="Index" />
      <main className={`${styles.main} ${inter.className}`}>
        <Headline page="index" />
        <Logo />
        <Links />
      </main>
    </>
  );
}
