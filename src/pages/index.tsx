import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from '../components/Container';
import SubscribeButton from '../components/SubscribeButton';
import { stripe } from '../Services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  const priceFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.amount);

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
              <span>for {priceFormatted} month</span>
            </p>

            <SubscribeButton priceId={product.priceId} />
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

export const getStaticProps: GetStaticProps = async () => {
  const priceKey = 'price_1LRFkEIre6VM8XlKXL2VCuBL';

  const price = await stripe.prices.retrieve(priceKey);

  const product = {
    priceId: price.id,
    amount: price.unit_amount! / 100,
  };
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24h
  };
};
