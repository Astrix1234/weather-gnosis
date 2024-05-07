# Weather Gnosis

The task involves implementing a Single Page Application (SPA) that provides a
7-day weather forecast and estimates solar energy production using data from a
public weather API. The application allows users to select their location via
geolocation or a world map and provides an intuitive interface with a
responsive, dark mode-compatible design.

## Technical Overview

The project was completed using modern web technologies, such as React,
TypeScript, Zustand, and SCSS, to deliver a responsive, feature-rich weather
forecasting application.

### Key Features

- **7-Day Weather Forecast:** Displays daily weather conditions, including
  min/max temperatures, weather icons, and estimated solar energy production.
- **Location Selection:**
  - **Geolocation:** Automatically fetches the user's current location.
  - **Map Picker:** Allows users to choose any location on a world map using
    Leaflet.
- **Dark Mode:** Supports switching between light and dark themes.
- **Responsive Design:** Adjusts to different screen sizes, ensuring a
  consistent experience.

### Technologies Used

- **Frontend:**

  - **React:** Component-based UI library for building the application's core.
  - **TypeScript:** Typed superset of JavaScript to improve code quality and
    maintainability.
  - **Zustand:** State management library to handle global application state.
  - **Leaflet & React-Leaflet:** For interactive map features.
  - **Font Awesome:** Icon library for weather icons.
  - **SCSS:** CSS preprocessor for better styling capabilities.

- **Backend (API):**
  - **Node.js & Express (Separate Project):** API endpoint that retrieves
    weather data and calculates solar energy production.
