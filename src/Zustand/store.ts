import { create } from 'zustand';

export interface WeatherData {
  date: string;
  weatherCode: number;
  tempMin: number;
  tempMax: number;
  estimatedEnergy: string;
}

interface WeatherStoreState {
  weatherData: WeatherData[];
  lat: number | null;
  lon: number | null;
  loading: boolean;
  error: string | null;
  darkMode: boolean;
}

interface WeatherStoreActions {
  setWeatherData: (data: WeatherData[]) => void;
  setLatLon: (lat: number, lon: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  toggleDarkMode: () => void;
}

const weatherStore = create<WeatherStoreState & WeatherStoreActions>(set => ({
  weatherData: [],
  lat: null,
  lon: null,
  loading: false,
  error: null,
  darkMode: false,
  setWeatherData: data => set({ weatherData: data }),
  setLatLon: (lat, lon) => set({ lat, lon }),
  setLoading: loading => set({ loading }),
  setError: error => set({ error }),
  toggleDarkMode: () => set(state => ({ darkMode: !state.darkMode })),
}));

export default weatherStore;
