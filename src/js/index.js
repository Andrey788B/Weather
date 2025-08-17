"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/scss/main.scss");
var summer_day_mp3_1 = require("../sounds/summer_day.mp3");
var summer_rain_mp3_1 = require("../sounds/summer_rain.mp3");
var summer_sky_mp3_1 = require("../sounds/summer_sky.mp3");
var winter_day_mp3_1 = require("../sounds/winter_day.mp3");
var winter_snow_mp3_1 = require("../sounds/winter_snow.mp3");
var winter_sky_mp3_1 = require("../sounds/winter_sky.mp3");
var spring_day_mp3_1 = require("../sounds/spring-day.mp3");
var spring_rain_mp3_1 = require("../sounds/spring-rain.mp3");
var spring_sky_mp3_1 = require("../sounds/spring-sky.mp3");
var autumn_day_mp3_1 = require("../sounds/autumn_day.mp3");
var autumn_rain_mp3_1 = require("../sounds/autumn_rain.mp3");
var autumn_sky_mp3_1 = require("../sounds/autumn_sky.mp3");
// Фоны
var summer_jpg_1 = require("../picturies/summer.jpg");
var winter_jpg_1 = require("../picturies/winter.jpg");
var autumn_jpg_1 = require("../picturies/autumn.jpg");
var spring_jpg_1 = require("../picturies/spring.jpg");
var API_KEY = '4f88e5828fe24476bddb03ace0378f39';
var CITY = 'Moscow';
var weatherMap = {
    Clear: { season: 'summer', weather: 'day', icon: '☀️' },
    Rain: { season: 'autumn', weather: 'rain', icon: '🌧️' },
    Snow: { season: 'winter', weather: 'rain', icon: '❄️' },
    Clouds: { season: 'spring', weather: 'sky', icon: '☁️' }
};
document.addEventListener('DOMContentLoaded', function () {
    var weatherBtn = document.getElementById('weatherDemoBtn');
    var weatherBox = document.querySelector('.Current_weather_box_deactivated, .Current_weather_box_activated, .Current_weather_box_hidden');
    if (!weatherBtn || !weatherBox)
        return;
    weatherBtn.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, weatherType, config, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(CITY, "&appid=").concat(API_KEY, "&units=metric"))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    weatherType = data.weather[0].main;
                    config = weatherMap[weatherType];
                    if (config) {
                        weatherBox.classList.remove('Current_weather_box_deactivated', 'Current_weather_box_hidden');
                        weatherBox.classList.add('Current_weather_box_activated');
                        weatherBox.querySelector('.City_name').textContent = data.name;
                        weatherBox.querySelector('.Temperature').textContent = "".concat(Math.round(data.main.temp), "\u00B0C");
                        weatherBox.querySelector('.Weather_icon').textContent = config.icon;
                        change(config.weather);
                        setTimeout(function () {
                            weatherBox.classList.add('Current_weather_box_hidden');
                            setTimeout(function () {
                                weatherBox.classList.remove('Current_weather_box_activated', 'Current_weather_box_hidden');
                                weatherBox.classList.add('Current_weather_box_deactivated');
                            }, 500);
                        }, 5000);
                    }
                    else {
                        alert("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043F\u043E\u0433\u043E\u0434\u0430: ".concat(weatherType));
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    alert('Не удалось получить погоду');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    weatherBox.querySelector('.Close_weather').addEventListener('click', function () {
        weatherBox.classList.add('Current_weather_box_hidden');
        setTimeout(function () {
            weatherBox.classList.remove('Current_weather_box_activated', 'Current_weather_box_hidden');
            weatherBox.classList.add('Current_weather_box_deactivated');
        }, 500);
    });
});
var elementsMap = [
    { main: 'autumn', entrance: 'title_autumn' },
    { main: 'winter', entrance: 'title_winter' },
    { main: 'summer', entrance: 'title_summer' },
    { main: 'spring', entrance: 'title_spring' }
];
var volumeSlider = document.getElementById('volumeSlider');
var single;
document.addEventListener('DOMContentLoaded', function () {
    var defaultWeather = document.getElementById('day');
    defaultWeather.classList.add('active');
    current.weather = 'day';
});
var sounds = {
    summer: {
        day: new Audio(summer_day_mp3_1.default),
        rain: new Audio(summer_rain_mp3_1.default),
        sky: new Audio(summer_sky_mp3_1.default),
    },
    spring: {
        day: new Audio(spring_day_mp3_1.default),
        rain: new Audio(spring_rain_mp3_1.default),
        sky: new Audio(spring_sky_mp3_1.default),
    },
    autumn: {
        day: new Audio(autumn_day_mp3_1.default),
        rain: new Audio(autumn_rain_mp3_1.default),
        sky: new Audio(autumn_sky_mp3_1.default),
    },
    winter: {
        day: new Audio(winter_day_mp3_1.default),
        rain: new Audio(winter_snow_mp3_1.default),
        sky: new Audio(winter_sky_mp3_1.default),
    }
};
Object.values(sounds).forEach(function (audio) {
    audio.loop = true;
    audio.volume = 0.5;
});
var current = {
    name: null, //название текущего звука
    isPlaying: false, //играет ли сейчас этот звук (true/false)
};
function change(id) {
    var _a;
    document.querySelectorAll('.Swiper_slide_up').forEach(function (el) { return el.classList.remove('active'); });
    document.getElementById(id).classList.add('active');
    single = id;
    if (current.name) {
        (_a = sounds[current.name][current.weather || single]) === null || _a === void 0 ? void 0 : _a.pause();
        sounds[current.name][current.weather || single].currentTime = 0;
        magic(current.name);
        current.weather = single;
    }
    else {
        console.log("\u041F\u043E\u0433\u043E\u0434\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u0430: ".concat(single, ", \u043D\u043E \u0441\u0435\u0437\u043E\u043D \u043F\u043E\u043A\u0430 \u043D\u0435 \u0437\u0430\u0434\u0430\u043D"));
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
    }
    else {
        sounds[season][singl].play();
        current = { name: season, isPlaying: true };
        document.body.style.backgroundImage = "url('".concat(bg, "')");
    }
}
function magic(id) {
    var precipitation = document.querySelector('.Swiper_slide_up.active').id;
    single = precipitation;
    var bgPaths = {
        summer: summer_jpg_1.default,
        winter: winter_jpg_1.default,
        autumn: autumn_jpg_1.default,
        spring: spring_jpg_1.default
    };
    if (bgPaths[id]) {
        other(id, bgPaths[id], single);
        console.log("\u0412\u0440\u0435\u043C\u044F \u0433\u043E\u0434\u0430: ".concat(id, ", \u0442\u0440\u0435\u043A: ").concat(single));
        elementsMap.forEach(function (item) {
            var el = document.getElementById(item.entrance);
            if (item.main === id) {
                el.classList.add('Text_content_activated');
                el.classList.remove('Text_content_deactivated');
            }
            else {
                el.classList.remove('Text_content_activated');
                el.classList.add('Text_content_deactivated');
            }
        });
    }
    else {
        console.log("Такого времени года нет");
    }
}
window.magic = magic;
volumeSlider.addEventListener('input', function () {
    if (current.name && single) {
        sounds[current.name][single].volume = volumeSlider.value;
    }
});
