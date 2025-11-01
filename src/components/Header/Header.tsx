import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.content}>Search friends by interests</p>
    </header>
  );
}
