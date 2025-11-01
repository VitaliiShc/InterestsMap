import { useEffect, useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { loadUsers } from '@/api/loadUsers';
import type { User } from '@/types/types';

import styles from './MapSearch.module.css';

export function MapSearch() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    loadUsers().then(setUsers).catch(console.error);
  }, []);

  const filtered = useMemo(() => {
    if (!users) return [];

    const query = filter.trim().toLowerCase();

    if (!query) return users;

    return users.filter((user) =>
      user.interests.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [users, filter]);
  console.log('filtered: ', filtered);

  return (
    <div className={styles.mapSearch}>
      <input
        placeholder="Filter by interest (e.g. music)"
        value={filter}
        onChange={(evt) => setFilter(evt.target.value)}
      />
      <MapContainer
        center={[50.45, 30.52]}
        zoom={2}
        minZoom={2}
        className={styles.mapContainer}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}
