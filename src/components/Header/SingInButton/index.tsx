import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export default function SingInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.button}>
      <FaGithub color="#04d361" width={20} height={20} /> Vicente Longatto
      <FiX
        color="#737380"
        width={20}
        height={20}
        className={styles.closeIcon}
      />
    </button>
  ) : (
    <button type="button" className={styles.button}>
      <FaGithub color="#eba417" width={20} height={20} /> Sing in with Github
    </button>
  );
}
