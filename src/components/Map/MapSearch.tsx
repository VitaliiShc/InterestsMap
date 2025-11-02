import { useEffect, useState, useMemo } from 'react';
import { loadUsers } from '@/api/loadUsers';
import type { User } from '@/types/types';
import { MemoisedMap } from '@/components/Map/MemoisedMap';
import styles from './Map.module.css';

export function MapSearch() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState('');
  const [debouncedFilter, setDebouncedFilter] = useState('');

  useEffect(() => {
    loadUsers()
      .then(setUsers)
      .catch((err) => console.error('Error loading users:', err));
  }, []);

  useEffect(() => {
    const trimmedQuery = query.trim();
    if (trimmedQuery.length < 3) {
      setDebouncedFilter('');
      return;
    }

    const timeout = setTimeout(() => setDebouncedFilter(trimmedQuery), 400);

    return () => clearTimeout(timeout);
  }, [query]);

  const filteredUsers = useMemo(() => {
    if (!debouncedFilter) return users;

    const query = debouncedFilter.toLowerCase();

    return users.filter((user) =>
      user.interests.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [users, debouncedFilter]);

  return (
    <div className={styles.mapSearch}>
      <input
        placeholder="Filter by interest, e.g. jogging (min 3 letters)"
        value={query}
        onChange={(evt) => setQuery(evt.target.value)}
        className={styles.input}
      />

      <div className={styles.mapWrap}>
        <MemoisedMap users={filteredUsers} />
      </div>
    </div>
  );
}
