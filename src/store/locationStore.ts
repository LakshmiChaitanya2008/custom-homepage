import { writable } from "svelte/store";
import axios from "axios";

const createLocationStore = function () {
  const { subscribe, update } = writable({
    latitude: 0,
    longitude: 0,
    temperature: 0,
    city: "",
    feels_like: 0,
    iconCode: "",
    condition: "",
  });

  return {
    subscribe,
    getWeather: function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude: lat, longitude: lon } = position.coords;

          const data = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
              import.meta.env.VITE_API_KEY
            }`
          );

          const wea = data.data;
          console.log(wea);
          update(() => ({
            latitude: lat,
            longitude: lon,
            city: wea.name,
            temperature: wea.main.temp,
            feels_like: wea.main.feels_like,
            iconCode: wea.weather[0].icon,
            condition: wea.weather[0].main,
          }));
        });
      } else {
        return;
      }
    },
  };
};

export const locationStore = createLocationStore();
