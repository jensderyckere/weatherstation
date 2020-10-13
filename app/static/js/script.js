/** Getting al dates */
let date = new Date();
let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0');

for(let i = 0; i < 8; i++) {
    let dayInt = Number(dd) + i;
    const domDate = document.getElementsByClassName('weather-date');
    domDate[i].textContent = dayInt + '/' + mm;
};

/** Converting fahrenheit to celsius */
let fahrenheitMax = document.getElementsByClassName('weather-max');
let fahrenheitMin = document.getElementsByClassName('weather-min');
let fahrenheitCurrent = document.getElementsByClassName('weather-current');

for(let i = 0; i < 8; i++) {
    let maxTemp = fahrenheitMax[i].textContent - 273.15;
    let minTemp = fahrenheitMin[i].textContent - 273.15;
    let currentTemp = fahrenheitCurrent[0].textContent - 273.15;

    fahrenheitMax[i].textContent = Math.round(maxTemp) + '°C';
    fahrenheitMin[i].textContent = Math.round(minTemp) + '°C';

    fahrenheitCurrent[0].textContent = Math.round(currentTemp) + '°C';
};