import { memo, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import type { ReactElement } from 'react';
import type {
  Map as LeafletMap,
  LatLngBounds,
  LeafletMouseEvent,
} from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import type { User } from '@/types/types';
import styles from './Map.module.css';

interface MapProps {
  users: User[];
}

interface ClusterLayerLike {
  getBounds(): LatLngBounds;
}

interface ClusterMouseEvent extends LeafletMouseEvent {
  layer: ClusterLayerLike;
}

function MapSetter({
  onCreated,
}: {
  onCreated: (leafletMap: LeafletMap) => void;
}) {
  const map = useMap();

  useEffect(() => {
    if (map) {
      onCreated(map);
    }
  }, [map, onCreated]);

  return null;
}

function Map({ users }: MapProps): ReactElement {
  const [map, setMap] = useState<LeafletMap | null>(null);

  return (
    <MapContainer
      center={[50.45, 30.52]}
      zoom={2}
      minZoom={2}
      className={styles.mapContainer}
      doubleClickZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MarkerClusterGroup
        chunkedLoading
        spiderfyOnMaxZoom
        zoomToBoundsOnClick={false}
        eventHandlers={{
          clusterclick: (evt: ClusterMouseEvent) => {
            if (!map) return;

            const bounds = evt.layer.getBounds();

            map.flyToBounds(bounds, {
              animate: true,
              duration: 1.5,
            });
          },
        }}
      >
        {users.map((user) => (
          <Marker
            key={user.id}
            position={[user.location.lat, user.location.lon]}
          >
            <Popup>
              <strong>{user.name}</strong>
              <br />
              Interests: {user.interests.join(', ')}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

      <MapSetter onCreated={setMap} />
    </MapContainer>
  );
}

export const MemoisedMap = memo(Map);
