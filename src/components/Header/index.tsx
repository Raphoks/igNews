import Image from 'next/image';
import { Container } from '../Container';
import SingInButton from './SingInButton';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.menu}>
      <Container>
        <div className={styles.content}>
          <Image src="/images/logo.svg" alt="ig.news" width={80} height={80} />
          <nav>
            <a href="#" className={styles.active}>
              Home
            </a>
            <a href="#">Posts</a>
          </nav>

          <SingInButton />
        </div>
      </Container>
    </header>
  );
}
