import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>React Resume</title>
      <meta
        name="description"
        content="Generated reasume by create next app, react, next.js"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Bhaskar Bhatt</h1>

      <p className={styles.description}>Full Stack Developer</p>

      <div className={styles.grid}>
        <a href="https://github.com/bhattbhaskar/" className={styles.card}>
          <h2>Github &rarr;</h2>
          <p>
            Find coding examples with React, JavaScript, TypeScript, PHP, etc.
          </p>
        </a>

        <a href="https://www.linkedin.com/in/bhattbhaskar88/" className={styles.card}>
          <h2>LinkedIn &rarr;</h2>
          <p>Find details about me</p>
        </a>

        <a
          href="https://github.com/bhattbhaskar/react-resume/"
          className={styles.card}
        >
          <h2>Open Source? &rarr;</h2>
          <p>Yes, You can modify and create PR.</p>
        </a>

        <a
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>In Progress.</p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
    <a href="https://madewithlove.org.in" target="_blank">Made with  <span >  &hearts;  </span>  in India</a>
    </footer>
  </div>
);

export default Home;
