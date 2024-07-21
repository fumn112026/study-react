import Head from "next/head";
import Link from "next/link";
import style from "./Header.module.css"

export function Header(props) {
  return (
    <div>
      <Head>
        <title>{props.page} page</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={style.header}>
          <Link href="/" className={style.anchor}>index</Link>
          <Link href="about" className={style.anchor}>about</Link>
        </header>
    </div>
  );
}
