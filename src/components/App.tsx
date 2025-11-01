import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './App.module.css';
import { MapSearch } from './MapSearch/MapSearch';

export function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className="VisuallyHidden">Search friends by interests</h1>
        <MapSearch />
      </main>
      <Footer />
    </>
  );
}
