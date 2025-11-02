import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { MapSearch } from '@/components/Map/MapSearch';
import styles from './App.module.css';

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
