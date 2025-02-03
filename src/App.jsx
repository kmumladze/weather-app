import { useEffect } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function App() {
  useEffect(() => {
    async function fetchWeather() {
      const location = window.navigator && window.navigator.geolocation;

      location.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
          );
          const restData = await response.json();
          console.log(restData);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    fetchWeather();
  }, []);

  return (
    <h1 className="text-3xl font-bold underline text-stone-700">
      Hello world!
    </h1>
  );
}
