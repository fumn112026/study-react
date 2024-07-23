import Head from "next/head";
import Link from "next/link";
import style from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "index" },
  { href: "/about", label: "about" },
];

export const Header = (props) => {
  return (
    <>
      <Head>
        <title>{props.page} page</title>
      </Head>
      <header className={style.header}>
        {NAV_ITEMS.map((item) => {
          return (
            <Link key={item.href} href={item.href} className={style.anchor}>
              {item.label}
            </Link>
          );
        })}
      </header>
    </>
  );
};
