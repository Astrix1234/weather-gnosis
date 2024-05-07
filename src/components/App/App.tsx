import Geolocation from '../Geolocation/Geolocation';
import styles from './App.module.scss';
import Map from '../Map/Map';
import weatherStore from '../../Zustand/store';

const App: React.FC = () => {
  const { darkMode, toggleDarkMode } = weatherStore();

  return (
    <div className={`${styles.app} ${darkMode ? styles.darkMode : ''}`}>
      <header className={styles.header}>
        <h1>7-Day Weather Forecast</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <Geolocation />
      <Map />
    </div>
  );
};

export default App;
