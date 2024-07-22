import { Inter } from "next/font/google";
import styles from "src/styles/Home.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { Header } from "src/components/Header";
import { Logo } from "src/components/Logo";
import { useCallback, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleCount = useCallback((e) => {
    setCount((count) => count + 1);
  }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以下にしてください。");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

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
      </main>
    </>
  )
}
