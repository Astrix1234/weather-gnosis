import { useEffect } from 'react';
import weatherStore from '../../Zustand/store';
import WeatherTable from '../WeatherTable/WeatherTable';

const Geolocation: React.FC = () => {
  const { setLatLon, lat, lon } = weatherStore();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLatLon(latitude, longitude);
        },
        error => {
          console.error('Geolocation error:', error);
        }
      );
    } else {
      console.error('Geolocation not available');
    }
  }, [setLatLon]);

  if (lat === null || lon === null) return <div>Loading location...</div>;

  return <WeatherTable />;
};

export default Geolocation;
