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

    fahrenheitMax[i].textContent = Math.round(maxTemp) + '°C';
    fahrenheitMin[i].textContent = Math.round(minTemp) + '°C';
};

let currentTemp = fahrenheitCurrent[0].textContent - 273.15;
fahrenheitCurrent[0].textContent = Math.round(currentTemp) + '°C';

/** Setting symbols */
for (let i = 0; i < 8; i++) {
    const main = document.getElementsByClassName('hidden-value')[i].textContent.trim();

    if (main === 'Clear') {
        document.getElementsByClassName('main-weather')[i].src = `../static/images/Sun.png`;
    } else if (main === 'Clouds') {
        document.getElementsByClassName('main-weather')[i].src = `../static/images/Clouds.png`;
    } else if (main === 'Drizzle') {
        document.getElementsByClassName('main-weather')[i].src = `../static/images/Drizzle.png`;
    } else if (main === 'Thunderstorm') {
        document.getElementsByClassName('main-weather')[i].src = `../static/images/Thunderstorm.png`;
    } else if (main === 'Snow') {
        document.getElementsByClassName('main-weather')[i].src = `../static/images/Snow.png`;
    } else {
        document.getElementsByClassName('main-weather')[i].src = `../static/images/Rain.png`;
    }
};

const mainCurrent = document.getElementsByClassName('hidden-value-main')[0].textContent.trim()

if (mainCurrent === 'Clear') {
    document.getElementsByClassName('main-weather-current')[0].src = `../static/images/Sun.png`;
} else if (mainCurrent === 'Clouds') {
    document.getElementsByClassName('main-weather-current')[0].src = `../static/images/Clouds.png`;
} else if (mainCurrent === 'Drizzle') {
    document.getElementsByClassName('main-weather-current')[0].src = `../static/images/Drizzle.png`;
} else if (mainCurrent === 'Thunderstorm') {
    document.getElementsByClassName('main-weather-current')[0].src = `../static/images/Thunderstorm.png`;
} else if (mainCurrent === 'Snow') {
    document.getElementsByClassName('main-weather-current')[0].src = `../static/images/Snow.png`;
} else {
    document.getElementsByClassName('main-weather-current')[0].src = `../static/images/Rain.png`;
}