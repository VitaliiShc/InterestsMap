import { Link } from '@/components/Link/Link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.content}>
        Page made by{' '}
        <Link href="https://github.com/VitaliiShc/InterestsMap">
          VitaliiShc
        </Link>{' '}
      </p>

      <p className={styles.content}>
        Special thanks to{' '}
        <Link href="https://agafonkin.com">Volodymyr Agafonkin</Link> and the{' '}
        <Link href="https://github.com/Leaflet/Leaflet/graphs/contributors">
          community
        </Link>
      </p>
    </footer>
  );
}
