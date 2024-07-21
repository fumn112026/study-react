import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";

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
