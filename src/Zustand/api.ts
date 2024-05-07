import axios from 'axios';

const weatherAPI = axios.create({
  baseURL: 'https://weather-gnosis-backend.onrender.com/api',
});

export const fetchWeatherForecast = async (lat: number, lon: number) => {
  const response = await weatherAPI.get('/weather', {
    params: { lat, lon },
  });
  return response.data;
};
