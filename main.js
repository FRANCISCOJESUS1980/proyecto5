import './main.scss'
import './public/assets/componentes/tresEnRaya/logicaGame.js'
import './public/assets/componentes/tresEnRaya/logicaGame.scss'
import './public/assets/componentes/tresEnRaya/btnvolverMenuPrin.js'
import {
  iniciarJuego,
  reiniciarJuego
} from './public/assets/componentes/volverMenu'

document.addEventListener('DOMContentLoaded', () => {
  const musicUrl =
    'https://www.bensound.com/bensound-music/bensound-relaxing.mp3'
  let audio = new Audio(musicUrl)
  audio.loop = true
  audio.volume = 0.5

  const isMusicPlaying = localStorage.getItem('isMusicPlaying') === 'true'
  const playPauseBtn = document.getElementById('playPauseBtn')
  const volumeControl = document.getElementById('volumeControl')

  if (isMusicPlaying) {
    audio.play().catch((error) => {
      console.error('Error al reproducir la música:', error)
    })
    playPauseBtn.textContent = 'Pause'
  } else {
    playPauseBtn.textContent = 'Play'
  }

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch((error) => {
        console.error('Error al reproducir la música:', error)
      })
      playPauseBtn.textContent = 'Pause'
      localStorage.setItem('isMusicPlaying', 'true')
    } else {
      audio.pause()
      playPauseBtn.textContent = 'Play'
      localStorage.setItem('isMusicPlaying', 'false')
    }
  })

  volumeControl.addEventListener('input', (event) => {
    audio.volume = event.target.value
  })

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('isMusicPlaying', !audio.paused)
  })
})
