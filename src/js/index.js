import '../styles/scss/main.scss';

import forestSound from '../sounds/summer.mp3';
import rainSound from '../sounds/rain.mp3';
import snowSound from '../sounds/winter.mp3';

import forestBg from '../../src/picturies/summer-bg.jpg';
import rainBg from '../../src/picturies/rainy-bg.jpg';
import snowBg from '../../src/picturies/winter-bg.jpg';

const sounds = {
  forest: new Audio(forestSound),
  rain: new Audio(rainSound),
  snow: new Audio(snowSound),
};

const backgrounds = {
  forest: forestBg,
  rain: rainBg,
  snow: snowBg,
};

Object.values(sounds).forEach(audio => {
  audio.loop = true
  audio.volume = 0.5
})

let current = {
  name: null,
  isPlaying: false,
}

const cards = document.querySelectorAll('.Card')
const volumeSlider = document.getElementById('volumeSlider')
const body = document.body

cards.forEach(card => {
  card.addEventListener('click', () => {
    const soundName = card.dataset.sound
    const bg = backgrounds[soundName]

    if (current.name && current.name !== soundName) {
      sounds[current.name].pause()
      sounds[current.name].currentTime = 0
    }

    if (current.name === soundName && current.isPlaying) {
      sounds[soundName].pause()
      current.isPlaying = false
    } else {
      sounds[soundName].play()
      current = { name: soundName, isPlaying: true }
      body.style.backgroundImage = `url('${bg}')`
    }
  })
})

volumeSlider.addEventListener('input', () => {
  if (current.name) {
    sounds[current.name].volume = volumeSlider.value
  }
})