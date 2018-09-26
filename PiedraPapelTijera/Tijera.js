//Genera un número aleatorio entre un rango de enteros
function aleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];
var opcionUsuario=0;

  opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nSalir: 9");

  var opcionMaquina = aleatorio(0,2);

  alert("Elegiste " + opciones[opcionUsuario]);
  alert("Javascript eligió " + opciones[opcionMaquina]);

  if(opcionUsuario == piedra)
  {
      if(opcionMaquina == piedra)
      {
          alert("Empate!");
      }
      else if(opcionMaquina == papel)
      {
          alert("Perdiste :( ");
      }
      else if(opcionMaquina == tijera)
      {
          alert("Ganaste!");
      }
  }
  else if(opcionUsuario == papel)
  {
      if(opcionMaquina == piedra)
      {
          alert("Ganaste!");
      }
      else if(opcionMaquina == papel)
      {
          alert("Empate!");
      }
      else if(opcionMaquina == tijera)
      {
          alert("Perdiste!");
      }
  }
  else if(opcionUsuario == tijera)
  {
      if(opcionMaquina == piedra)
      {
          alert("Perdiste!");
      }
      else if(opcionMaquina == papel)
      {
          alert("Ganaste!");
      }
      else if(opcionMaquina == tijera)
      {
          alert("Empate!");
      }
  }
  else
  {
      alert("¿Pos qué carajo?");
  }
}
