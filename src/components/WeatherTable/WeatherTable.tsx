import { useEffect } from 'react';
import weatherStore from '../../Zustand/store';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import styles from './WeatherTable.module.scss';
import { fetchWeatherForecast } from '../../Zustand/api';

const WeatherTable: React.FC = () => {
  const {
    weatherData,
    lat,
    lon,
    loading,
    error,
    darkMode,
    setWeatherData,
    setLoading,
    setError,
  } = weatherStore();

  useEffect(() => {
    if (lat !== null && lon !== null) {
      const fetchWeather = async () => {
        setLoading(true);
        try {
          const data = await fetchWeatherForecast(lat, lon);
          setWeatherData(data);
          setError(null);
        } catch (err) {
          setError('Failed to fetch weather data');
        } finally {
          setLoading(false);
        }
      };

      fetchWeather();
    }
  }, [lat, lon, setLoading, setWeatherData, setError]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
      className={`${styles.weatherContainer} ${
        darkMode ? styles.darkMode : ''
      }`}
    >
      <table className={styles.weatherTable}>
        <thead>
          <tr>
            {weatherData.map(data => (
              <th key={data.date}>
                {new Date(data.date).toLocaleDateString()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {weatherData.map(data => (
              <td key={data.date}>
                <WeatherIcon code={data.weatherCode} />
              </td>
            ))}
          </tr>
          <tr>
            {weatherData.map(data => (
              <td key={data.date}>{data.tempMin}°C</td>
            ))}
          </tr>
          <tr>
            {weatherData.map(data => (
              <td key={data.date}>{data.tempMax}°C</td>
            ))}
          </tr>
          <tr>
            {weatherData.map(data => (
              <td key={data.date}>{data.estimatedEnergy} kWh</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
