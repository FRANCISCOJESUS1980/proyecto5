import './main.scss'
import './public/assets/componentes/tresEnRaya/logicaGame.js'
import './public/assets/componentes/tresEnRaya/logicaGame.scss'
import {
  iniciarJuego,
  reiniciarJuego
} from './public/assets/componentes/volverMenu'

document.addEventListener('DOMContentLoaded', () => {
  const games = document.querySelectorAll('.game')

  const musicUrl =
    'https://www.bensound.com/bensound-music/bensound-relaxing.mp3'

  let audio = new Audio(musicUrl)
  audio.loop = true
  audio.volume = 0.5

  const isMusicPlaying = localStorage.getItem('isMusicPlaying') === 'true'

  if (isMusicPlaying) {
    audio.play().catch((error) => {
      console.error('Error al reproducir la música:', error)
    })
  }
  const startMusic = () => {
    audio.play().catch((error) => {
      console.error('Error al reproducir la música:', error)
    })
    document.removeEventListener('click', startMusic)
  }

  document.addEventListener('click', startMusic)

  games.forEach((game) => {
    game.addEventListener('click', (event) => {
      event.preventDefault()
      const url = game.getAttribute('data-url')

      localStorage.setItem('isMusicPlaying', !audio.paused)

      window.location.href = url
    })
  })
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('isMusicPlaying', !audio.paused)
  })
})
