const bingo = () =>{

  let turnos = 1;
  let lineaCantada = false;

  const readlineSync = require("readline-sync");

  const nombre = readlineSync.question("Bienvenido al bingo! ¿Cual es tu nombre? ");
  console.log(`Hola, ${nombre}! ¡Completa el carton en menos turnos para obtener mas puntos!`);
  console.log(`Sistema de puntos\nMenos de 40 turnos = 200pts\nEntre 40 y 50 turnos = 150pts\nEntre 50 y 60 turnos = 100pts\nEntre 60 y 70 turnos = 50 puntos\nMas de 70 turnos = o pts`);
  
//Funcion que genera un carton con numeros aleatorios del 1-20
  const generarCarton = () =>{
    const miSet = new Set();
    while(miSet.size < 15){
      let numero = Math.floor(Math.random() * 20) + 1;
      miSet.add(numero);
    }
    return Array.from(miSet);
  };

  let carton = generarCarton();
  carton = carton.sort((a,b) => a-b);

//Mostrar el carton en formato de tabla
const mostrarCarton = (array, filas, columnas) =>{
  for(let fila = 0; fila < filas; fila++){
    let filaActual = [];
    for(let columna = 0; columna < columnas; columna++){
      filaActual.push(array[fila * columnas + columna]);
    }
    console.log(filaActual.join('\t'));
  }
}
  console.log(`Tu carton para jugar el bingo es:`)
  mostrarCarton(carton, 3, 5);

  const generarNuevoCarton = () =>{
    let jugar = true;
    
    while (jugar){
      const otroCarton =  readlineSync.question("¿Deseas cambiarlo por otro carton? (Si/No)").toLowerCase();

      if (otroCarton === 'si'){
        carton = generarCarton();
        carton = carton.sort((a,b) => a-b);
        console.log('Tu nuevo carton para jugar Bingo es:')
        mostrarCarton(carton, 3, 5);
      } else if (otroCarton === 'no'){
        jugar = false;
      } else {
        console.log('opcion no válida. Ingrese si o no.');
      }
    }
    return carton
  } 
  generarNuevoCarton(); // Pregunta si quiere otro carton o continuar

   const linea = (carton) =>{
    if (!lineaCantada){
      const filas = [
        carton.slice(0, 5),
        carton.slice(5, 10),
        carton.slice(10, 15)
      ];
      for (let fila of filas){
        if (fila.every(element => element === 'X')){
          console.log('LINEA!!');
          lineaCantada = true;
        }
      }
    }
  };

  //funcion que revisa si alguno de los elementos del carton coincide con el numero random
  const generarTurno = (carton) =>{
    let numeroRandom = Math.floor(Math.random() * 20) + 1;
    console.log(`el numero aleatorio es: ${numeroRandom}`);

    for (let i = 0; i < carton.length; i++) {
    if (carton[i] === numeroRandom) {
      carton[i] = 'X';
      console.log(`el numero ${numeroRandom} ha sido encontrado`);
      break;
    } 
  }
  if (carton.includes('X')) {
    mostrarCarton(carton, 3, 5); // cartón actualizado
  } else if (!carton.includes(numeroRandom)) {
    console.log(`el numero ${numeroRandom} NO ha sido encontrado`);
  }
    return carton;
  }
  
  const iniciarPartida = () =>{
    let inicio = readlineSync.question("¿Desea iniciar con el bingo? (Si/No)").toLowerCase();
    if (inicio === 'si'){
      generarTurno(carton);
    } else if (inicio === 'no') {
      return console.log('Hasta Pronto!');
    }
  };
  iniciarPartida();

  const sistemaPuntaje = (nombre, turnos) =>{
    let puntaje = 0;
    if (turnos < 40){
      puntaje = 200;
      console.log(`${nombre}, tu puntaje es: ${puntaje}, MAXIMO PUNTAJE!!`)
    } else if (turnos < 50){
      puntaje = 150;      
      console.log(`${nombre}, tu puntaje es: ${puntaje}, EXCELENTE!!`)
    } else if (turnos < 60){
      puntaje = 100;
      console.log(`${nombre}, tu puntaje es: ${puntaje}, Buen intento!`)
    } else if (turnos < 70){
      puntaje = 50;
      console.log(`${nombre}, tu puntaje es: ${puntaje}, Mejor suerte la proxima vez :/`)
    } else{
      puntaje = 0;
      console.log(`${nombre}, tu puntaje es: ${puntaje}, no es tu dia hoy =(`)
    }  
  }

   const nuevoTurno = (carton) =>{
    let continuar = true;
    while (continuar && !carton.every(element => element === 'X')){
      const answer = readlineSync.question("¿Deseas seguir jugando? (Si/No)").toLowerCase();
      if (answer === 'no'){
        console.log('Gracias por jugar! Hasta Pronto!');
        continuar = false;
      } else if (answer === 'si') {
        carton = generarTurno(carton);
        linea(carton);
        turnos++;
        console.log(`Turno numero ${turnos}`);
      }
    }
    if (carton.every(element => element === 'X')){
      console.log(`¡BINGO! Has completado el carton en ${turnos} turnos.`)
      sistemaPuntaje(nombre, turnos);
    }
    return carton;
  }
  nuevoTurno(carton);

};

bingo();

