import Head from 'next/head';
import Image from 'next/image';
import { Container } from '../components/Container';
import SubscribeButton from '../components/SubscribeButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>Home | ig.news</Head>

      <Container>
        <main className={styles.contentContainer}>
          <section className={styles.hero}>
            <span>👏 Hey, welcome</span>
            <h1>
              News about
              <br /> the <span>React</span> world.
            </h1>
            <p>
              Get access to all the publications <br />
              <span>for $9.90 month</span>
            </p>

            <SubscribeButton />
          </section>

          <Image
            src="/images/avatar.svg"
            alt="Girl coding"
            width={770}
            height={770}
          />
        </main>
      </Container>
    </>
  );
}
