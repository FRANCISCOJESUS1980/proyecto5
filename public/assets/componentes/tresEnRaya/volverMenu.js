let cuadros = document.querySelectorAll('.cuadro')
let turno = 'X'
let juegoTerminado = false
let modoDeJuego = null

document.getElementById('volverAlMenu').addEventListener('click', () => {
  document.querySelector('.tresEnRaya').style.display = 'none'
  document.querySelector('.seleccionDeModo').style.display = 'flex'
})

export function iniciarJuego() {
  document.querySelector('.seleccionDeModo').style.display = 'none'
  document.querySelector('.tresEnRaya').style.display = 'block'
  reiniciarJuego()
}

document.querySelector('#jugarDeNuevo').addEventListener('click', () => {
  reiniciarJuego()
})

export function reiniciarJuego() {
  juegoTerminado = false
  turno = 'X'
  document.querySelector('.foco').style.left = '0px'
  document.querySelector('#Resultado').innerHTML = ''
  document.querySelector('#jugarDeNuevo').style.display = 'none'

  cuadros.forEach((e) => {
    e.innerHTML = ''
    e.style.removeProperty('background-color')
    e.style.color = '#000'
  })
}
