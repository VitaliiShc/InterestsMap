import { Link } from '../Link/Link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.content}>
        Page made by{' '}
        <Link href="https://github.com/VitaliiShc/InterestsMap">
          VitaliiShc
        </Link>
      </p>
    </footer>
  );
}
