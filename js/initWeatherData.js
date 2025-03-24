import latLng from "./latLng.js";
export const weatherDataArray = [];
export const appState = {
  apm: "am",
  dayIdx: 0,
};
export const initWheatherData = () => {
  return new Promise(async (resolve) => {
    for (let item of latLng) {
      let result = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${item.lat}&lon=${item.lng}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      );
      let data = await result.json();
      weatherDataArray.push(data);
    }
    document.querySelector(".loader").addEventListener("transitionend", (e) => {
      e.target.style.display = "none";
    });
    document.querySelector(".loader").style.opacity = "0";
    resolve();
  });
};
