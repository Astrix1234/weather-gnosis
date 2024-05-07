import React from 'react';
import styles from './WeatherIcon.module.scss';

interface WeatherIconProps {
  code: number;
}

const weatherIcons: { [key: number]: string } = {
  0: 'fa-sun',

  1: 'fa-sun',
  2: 'fa-cloud-sun',
  3: 'fa-cloud',

  45: 'fa-smog',
  48: 'fa-smog',

  51: 'fa-cloud-rain',
  53: 'fa-cloud-rain',
  55: 'fa-cloud-rain',

  56: 'fa-cloud-rain',
  57: 'fa-cloud-rain',

  61: 'fa-cloud-showers-heavy',
  63: 'fa-cloud-showers-heavy',
  65: 'fa-cloud-showers-heavy',

  66: 'fa-cloud-showers-heavy',
  67: 'fa-cloud-showers-heavy',

  71: 'fa-snowflake',
  73: 'fa-snowflake',
  75: 'fa-snowflake',

  77: 'fa-snowflake',

  80: 'fa-cloud-showers-heavy',
  81: 'fa-cloud-showers-heavy',
  82: 'fa-cloud-showers-heavy',

  85: 'fa-snowflake',
  86: 'fa-snowflake',

  95: 'fa-bolt',

  96: 'fa-bolt',
  99: 'fa-bolt',
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ code }) => {
  const iconClass = weatherIcons[code] || 'fa-question-circle';

  return <i className={`fas ${iconClass} ${styles.weatherIcon}`}></i>;
};

export default WeatherIcon;
