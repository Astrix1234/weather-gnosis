import { useState, useEffect, useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from 'react-leaflet';
import weatherStore from '../../Zustand/store';
import styles from './Map.module.scss';
import L from 'leaflet';

const MapEvents: React.FC<{
  setMarkerPosition: (lat: number, lon: number) => void;
}> = ({ setMarkerPosition }) => {
  const map = useMap();

  useMapEvents({
    click(e) {
      setMarkerPosition(e.latlng.lat, e.latlng.lng);
      map.flyTo([e.latlng.lat, e.latlng.lng], map.getZoom());
    },
  });

  return null;
};

const markerIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map: React.FC = () => {
  const { setLatLon, lat, lon } = weatherStore();
  const mapRef = useRef<L.Map | null>(null);
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    lat ?? 51.505,
    lon ?? -0.09,
  ]);

  const handleMarkerPositionChange = (lat: number, lon: number) => {
    setMarkerPosition([lat, lon]);
    setLatLon(lat, lon);
    if (mapRef.current) {
      mapRef.current.flyTo([lat, lon], mapRef.current.getZoom());
    }
  };

  useEffect(() => {
    if (lat !== null && lon !== null) {
      setMarkerPosition([lat, lon]);
      if (mapRef.current) {
        mapRef.current.flyTo([lat, lon], mapRef.current.getZoom());
      }
    }
  }, [lat, lon]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={markerPosition}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.map}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={markerPosition} icon={markerIcon}>
          <Popup>
            Latitude: {markerPosition[0].toFixed(2)}, Longitude:{' '}
            {markerPosition[1].toFixed(2)}
          </Popup>
        </Marker>
        <MapEvents setMarkerPosition={handleMarkerPositionChange} />
      </MapContainer>
    </div>
  );
};

export default Map;
