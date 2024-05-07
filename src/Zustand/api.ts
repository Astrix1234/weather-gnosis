import axios from 'axios';

const weatherAPI = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const fetchWeatherForecast = async (lat: number, lon: number) => {
  const response = await weatherAPI.get('/weather', {
    params: { lat, lon },
  });
  return response.data;
};
