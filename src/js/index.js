import '../styles/scss/main.scss';

import summerDay from '../sounds/summer_day.mp3';
import summerRain from '../sounds/summer_rain.mp3';
import summerSky from '../sounds/summer_sky.mp3';

import winterDay from '../sounds/winter_day.mp3';
import winterRain from '../sounds/winter_snow.mp3';
import winterSky from '../sounds/winter_sky.mp3';

import springDay from '../sounds/spring-day.mp3';
import springRain from '../sounds/spring-rain.mp3';
import springSky from '../sounds/spring-sky.mp3';

import autumnDay from '../sounds/autumn_day.mp3';
import autumnRain from '../sounds/autumn_rain.mp3';
import autumnSky from '../sounds/autumn_sky.mp3';

// Фоны
import summerImg from '../picturies/summer.jpg';
import winterImg from '../picturies/winter.jpg';
import autumnImg from '../picturies/autumn.jpg';
import springImg from '../picturies/spring.jpg';


const API_KEY = '4f88e5828fe24476bddb03ace0378f39'; 
const CITY = 'Moscow'; 

const weatherMap = {
  Clear: { season: 'summer', weather: 'day', icon: '☀️' },
  Rain: { season: 'autumn', weather: 'rain', icon: '🌧️' },
  Snow: { season: 'winter', weather: 'rain', icon: '❄️' },
  Clouds: { season: 'spring', weather: 'sky', icon: '☁️' }
};

document.addEventListener('DOMContentLoaded', () => {
  const weatherBtn = document.getElementById('weatherDemoBtn');
  const weatherBox = document.querySelector('.Current_weather_box_deactivated, .Current_weather_box_activated, .Current_weather_box_hidden');

  if (!weatherBtn || !weatherBox) return;

  weatherBtn.addEventListener('click', async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      const weatherType = data.weather[0].main;
      const config = weatherMap[weatherType];

      if (config) {
        weatherBox.classList.remove('Current_weather_box_deactivated', 'Current_weather_box_hidden');
        weatherBox.classList.add('Current_weather_box_activated');

        weatherBox.querySelector('.City_name').textContent = data.name;
        weatherBox.querySelector('.Temperature').textContent = `${Math.round(data.main.temp)}°C`;
        weatherBox.querySelector('.Weather_icon').textContent = config.icon;

        change(config.weather);

        setTimeout(() => {
          weatherBox.classList.add('Current_weather_box_hidden');
          setTimeout(() => {
            weatherBox.classList.remove('Current_weather_box_activated', 'Current_weather_box_hidden');
            weatherBox.classList.add('Current_weather_box_deactivated');
          }, 500);
        }, 5000);

      } else {
        alert(`Неизвестная погода: ${weatherType}`);
      }
    } catch (err) {
      console.error(err);
      alert('Не удалось получить погоду');
    }
  });

  weatherBox.querySelector('.Close_weather').addEventListener('click', () => {
    weatherBox.classList.add('Current_weather_box_hidden');
    setTimeout(() => {
      weatherBox.classList.remove('Current_weather_box_activated', 'Current_weather_box_hidden');
      weatherBox.classList.add('Current_weather_box_deactivated');
    }, 500);
  });
});


const elementsMap = [
	{ main: 'autumn',  entrance: 'title_autumn' },
    { main: 'winter',  entrance: 'title_winter' },
    { main: 'summer',  entrance: 'title_summer' },
    { main: 'spring',  entrance: 'title_spring' }
];


const volumeSlider = document.getElementById('volumeSlider')
let single;

document.addEventListener('DOMContentLoaded', () => {
  const defaultWeather = document.getElementById('day');
  defaultWeather.classList.add('active');
  current.weather = 'day';
});

const sounds = {
  summer: {
    day: new Audio(summerDay),
    rain: new Audio(summerRain),
    sky: new Audio(summerSky),
  },
  spring: {
    day: new Audio(springDay),
    rain: new Audio(springRain),
    sky: new Audio(springSky),
  },
  autumn: {
    day: new Audio(autumnDay),
    rain: new Audio(autumnRain),
    sky: new Audio(autumnSky),
  },
  winter: {
    day: new Audio(winterDay),
    rain: new Audio(winterRain),
    sky: new Audio(winterSky),
  }
};

Object.values(sounds).forEach(audio => {    //sounds - был общим массивом для звука (подумать)
  audio.loop = true
  audio.volume = 0.5
})

let current = {
	name: null, //название текущего звука
	isPlaying: false, //играет ли сейчас этот звук (true/false)
}

function change(id) {
  document.querySelectorAll('.Swiper_slide_up').forEach(el => el.classList.remove('active'));

  document.getElementById(id).classList.add('active');

  single = id;

  if (current.name) {
   
    sounds[current.name][current.weather || single]?.pause();
    sounds[current.name][current.weather || single].currentTime = 0;

    magic(current.name);

    current.weather = single;
  } else {
    console.log(`Погода выбрана: ${single}, но сезон пока не задан`);
  }
}

window.change = change;

function other(season, bg, singl) {
  if (current.name && current.name !== season) {
    sounds[current.name][singl].pause();
    sounds[current.name][singl].currentTime = 0;
  }

  if (current.name === season && current.isPlaying) {
    sounds[season][singl].pause();
    current.isPlaying = false;
  } else {
    sounds[season][singl].play();
    current = { name: season, isPlaying: true };
    document.body.style.backgroundImage = `url('${bg}')`;
  }
}

function magic(id) {
  let precipitation = document.querySelector('.Swiper_slide_up.active').id;
  single = precipitation; 
  
  const bgPaths = {
    summer: summerImg,
    winter: winterImg,
    autumn: autumnImg,
    spring: springImg
  };

  if (bgPaths[id]) {
    other(id, bgPaths[id], single);
    console.log(`Время года: ${id}, трек: ${single}`);

    elementsMap.forEach(item => {
      const el = document.getElementById(item.entrance);
      if (item.main === id) {
        el.classList.add('Text_content_activated');
        el.classList.remove('Text_content_deactivated');
      } else {
        el.classList.remove('Text_content_activated');
        el.classList.add('Text_content_deactivated');
      }
    });

  } else {
    console.log("Такого времени года нет");
  }
}

window.magic = magic;

volumeSlider.addEventListener('input', () => {
  if (current.name && single) {
    sounds[current.name][single].volume = volumeSlider.value;
  }
});