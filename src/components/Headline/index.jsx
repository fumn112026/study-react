import styles from "src/components/Headline/Headline.module.css";
import Image from "next/image";

export function Headline(props) {
  return (
    <div className={styles.description}>
      <p>
        Hello!! Get started by editing&nbsp;
        <code className={styles.code}>{props.page}.js</code>
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
}
