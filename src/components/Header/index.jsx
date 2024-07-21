import Head from "next/head";
import Link from "next/link";
import style from "src/components/Header/Header.module.css"

export function Header(props) {
  return (
    <>
      <Head>
        <title>{props.page} page</title>
      </Head>
      <header className={style.header}>
        <Link href="/" className={style.anchor}>index</Link>
        <Link href="/about" className={style.anchor}>about</Link>
      </header>
    </>
  );
}
