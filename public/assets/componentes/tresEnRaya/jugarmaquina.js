let cuadros = document.querySelectorAll('.cuadro')
import { Ganador, Empate, cambiarTurno } from './logicaGame'

export function jugarMaquina() {
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
