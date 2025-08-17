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

// минимальные типы для карты и ответа погоды
type WeatherCfg = { season: string; weather: string; icon: string };
type WeatherMap = Record<string, WeatherCfg>;
interface OWMResponse {
  name: string;
  main: { temp: number };
  weather: { main: string }[];
}

const weatherMap: WeatherMap = {
  Clear: { season: 'summer', weather: 'day', icon: '☀️' },
  Rain: { season: 'autumn', weather: 'rain', icon: '🌧️' },
  Snow: { season: 'winter', weather: 'rain', icon: '❄️' },
  Clouds: { season: 'spring', weather: 'sky', icon: '☁️' }
};

document.addEventListener('DOMContentLoaded', () => {
  const weatherBtn = document.getElementById('weatherDemoBtn') as HTMLButtonElement | null;
  const weatherBox = document.querySelector(
    '.Current_weather_box_deactivated, .Current_weather_box_activated, .Current_weather_box_hidden'
  ) as HTMLElement | null;

  if (!weatherBtn || !weatherBox) return;

  weatherBtn.addEventListener('click', async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
      );
      const data = (await response.json()) as OWMResponse;

      const weatherType = data.weather[0].main as string;
      const config = (weatherMap as Record<string, WeatherCfg>)[weatherType];

      if (config) {
        weatherBox.classList.remove('Current_weather_box_deactivated', 'Current_weather_box_hidden');
        weatherBox.classList.add('Current_weather_box_activated');

        (weatherBox.querySelector('.City_name') as HTMLElement).textContent = data.name;
        (weatherBox.querySelector('.Temperature') as HTMLElement).textContent = `${Math.round(data.main.temp)}°C`;
        (weatherBox.querySelector('.Weather_icon') as HTMLElement).textContent = config.icon;

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

  (weatherBox.querySelector('.Close_weather') as HTMLElement).addEventListener('click', () => {
    weatherBox.classList.add('Current_weather_box_hidden');
    setTimeout(() => {
      weatherBox.classList.remove('Current_weather_box_activated', 'Current_weather_box_hidden');
      weatherBox.classList.add('Current_weather_box_deactivated');
    }, 500);
  });
});

const elementsMap: Array<{ main: string; entrance: string }> = [
  { main: 'autumn', entrance: 'title_autumn' },
  { main: 'winter', entrance: 'title_winter' },
  { main: 'summer', entrance: 'title_summer' },
  { main: 'spring', entrance: 'title_spring' }
];

const volumeSlider = document.getElementById('volumeSlider') as HTMLInputElement;
let single: string | undefined;

document.addEventListener('DOMContentLoaded', () => {
  const defaultWeather = document.getElementById('day') as HTMLElement;
  defaultWeather.classList.add('active');
  current.weather = 'day';
});

type Season = 'summer' | 'spring' | 'autumn' | 'winter';
type SoundKind = 'day' | 'rain' | 'sky';
type Sounds = Record<Season, Record<SoundKind, HTMLAudioElement>>;

const sounds: Sounds = {
  summer: {
    day: new Audio(summerDay),
    rain: new Audio(summerRain),
    sky: new Audio(summerSky)
  },
  spring: {
    day: new Audio(springDay),
    rain: new Audio(springRain),
    sky: new Audio(springSky)
  },
  autumn: {
    day: new Audio(autumnDay),
    rain: new Audio(autumnRain),
    sky: new Audio(autumnSky)
  },
  winter: {
    day: new Audio(winterDay),
    rain: new Audio(winterRain),
    sky: new Audio(winterSky)
  }
};

// оставлено 1:1 — без изменения логики
(Object.values(sounds) as any).forEach((audio: any) => {
  audio.loop = true;
  audio.volume = 0.5;
});

let current: { name: Season | null; isPlaying: boolean; weather?: SoundKind } = {
  name: null,
  isPlaying: false
};

function change(id: string): void {
  document.querySelectorAll('.Swiper_slide_up').forEach(el => el.classList.remove('active'));

  (document.getElementById(id) as HTMLElement).classList.add('active');

  single = id;

  if (current.name) {
    const key = (current.weather || single) as SoundKind;
    sounds[current.name][key]?.pause();
    sounds[current.name][key].currentTime = 0;

    magic(current.name);

    current.weather = single as SoundKind;
  } else {
    console.log(`Погода выбрана: ${single}, но сезон пока не задан`);
  }
}

// экспорт в окно — без изменения поведения
declare global {
  interface Window {
    change: (id: string) => void;
    magic: (id: string) => void;
  }
}
window.change = change;

function other(season: Season, bg: string, singl: string): void {
  if (current.name && current.name !== season) {
    (sounds[current.name][singl as SoundKind] as HTMLAudioElement).pause();
    sounds[current.name][singl as SoundKind].currentTime = 0;
  }

  if (current.name === season && current.isPlaying) {
    sounds[season][singl as SoundKind].pause();
    current.isPlaying = false;
  } else {
    sounds[season][singl as SoundKind].play();
    current = { name: season, isPlaying: true };
    document.body.style.backgroundImage = `url('${bg}')`;
  }
}

function magic(id: string): void {
  const precipitation = (document.querySelector('.Swiper_slide_up.active') as HTMLElement).id;
  single = precipitation;

  const bgPaths: Record<string, string> = {
    summer: summerImg,
    winter: winterImg,
    autumn: autumnImg,
    spring: springImg
  };

  if (bgPaths[id]) {
    other(id as Season, bgPaths[id], single);
    console.log(`Время года: ${id}, трек: ${single}`);

    elementsMap.forEach(item => {
      const el = document.getElementById(item.entrance) as HTMLElement;
      if (item.main === id) {
        el.classList.add('Text_content_activated');
        el.classList.remove('Text_content_deactivated');
      } else {
        el.classList.remove('Text_content_activated');
        el.classList.add('Text_content_deactivated');
      }
    });
  } else {
    console.log('Такого времени года нет');
  }
}
window.magic = magic;

volumeSlider.addEventListener('input', () => {
  if (current.name && single) {
    // без изменения логики (строка -> число): делаем приведение типов
    (sounds[current.name][single as SoundKind] as HTMLAudioElement).volume =
      (volumeSlider.value as unknown as number);
  }
});