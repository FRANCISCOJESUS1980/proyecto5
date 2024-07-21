let cuadros = document.querySelectorAll('.cuadro')
let turno = 'X'
let juegoTerminado = false
let modoDeJuego = null

document.getElementById('unJugador').addEventListener('click', () => {
  modoDeJuego = 'unJugador'
  iniciarJuego()
})

document.getElementById('dosJugadores').addEventListener('click', () => {
  modoDeJuego = 'dosJugadores'
  iniciarJuego()
})

function iniciarJuego() {
  document.querySelector('.seleccionDeModo').style.display = 'none'
  document.querySelector('.tresEnRaya').style.display = 'block'
  reiniciarJuego()
}

cuadros.forEach((e) => {
  e.innerHTML = ''
  e.addEventListener('click', () => {
    if (!juegoTerminado && e.innerHTML === '') {
      e.innerHTML = turno
      Ganador()
      Empate()
      cambiarTurno()
      if (modoDeJuego === 'unJugador' && turno === '0' && !juegoTerminado) {
        jugarMaquina()
      }
    }
  })
})

function cambiarTurno() {
  if (turno === 'X') {
    turno = '0'
    document.querySelector('.foco').style.left = '85px'
  } else {
    turno = 'X'
    document.querySelector('.foco').style.left = '0px'
  }
}

function Ganador() {
  let Condiciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < Condiciones.length; i++) {
    let c0 = cuadros[Condiciones[i][0]].innerHTML
    let c1 = cuadros[Condiciones[i][1]].innerHTML
    let c2 = cuadros[Condiciones[i][2]].innerHTML

    if (c0 != '' && c0 === c1 && c0 === c2) {
      juegoTerminado = true
      document.querySelector('#Resultado').innerHTML = 'Gana ' + turno
      document.querySelector('#jugarDeNuevo').style.display = 'inline'

      for (let j = 0; j < 3; j++) {
        cuadros[Condiciones[i][j]].style.backgroundColor = '#40E0D0'
      }
    }
  }
}

function Empate() {
  if (!juegoTerminado) {
    let enEmpate = true
    cuadros.forEach((e) => {
      if (e.innerHTML === '') enEmpate = false
    })
    if (enEmpate) {
      juegoTerminado = true
      document.querySelector('#Resultado').innerHTML = 'Empate'
      document.querySelector('#jugarDeNuevo').style.display = 'inline'
    }
  }
}

document.querySelector('#jugarDeNuevo').addEventListener('click', () => {
  reiniciarJuego()
})

function reiniciarJuego() {
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

function jugarMaquina() {
  let movimientos = []
  cuadros.forEach((e, index) => {
    if (e.innerHTML === '') movimientos.push(index)
  })

  if (movimientos.length > 0) {
    let movimientoMaquina =
      movimientos[Math.floor(Math.random() * movimientos.length)]
    cuadros[movimientoMaquina].innerHTML = '0'
    Ganador()
    Empate()
    cambiarTurno()
  }
}
