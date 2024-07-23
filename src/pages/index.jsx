import { Inter } from "next/font/google";
import styles from "src/styles/Home.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { Header } from "src/components/Header";
import { Logo } from "src/components/Logo";
import { useCounter } from "/src/hooks/useCounter";
import { useInputArray } from "/src/hooks/useInputArray";
import { useBgLightBlue } from "@/src/hooks/useBgLightBlue";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { count, isShow, handleCount, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <>
      <Header page="Index" />
      <main className={`${styles.main} ${inter.className}`}>
        <Headline page="index" />
        <Logo />
        <Links />

        <button onClick={handleCount}>ボタン</button>
        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </main>
    </>
  );
}
