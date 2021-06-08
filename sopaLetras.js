const PALABRA_BUSCAR = 'OIE';
const  MATRIZ_PRUEBA = [['O','I','E'],['I','I','X'],['E','X','E']];
const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const calcular = (cantidadFilas,cantidadColumnas,matriz) => {
  let vecesEncontrado = 0;
  for(let fila = 0; fila < cantidadFilas; fila++){
    for(let columna = 0; columna < cantidadColumnas; columna++){
      if(matriz[fila][columna] === PALABRA_BUSCAR[0]){
        if(revisarVecino({fila, columna: moverPosicion(columna + 1,cantidadColumnas )}, PALABRA_BUSCAR[1],matriz) && revisarVecino({fila , columna:moverPosicion(columna + 2,cantidadColumnas )} , PALABRA_BUSCAR[2],matriz)){
          vecesEncontrado++;
        }
        if(revisarVecino({fila , columna:moverPosicion(columna - 1,cantidadColumnas )} , PALABRA_BUSCAR[1],matriz) && revisarVecino({fila , columna:moverPosicion(columna - 2,cantidadColumnas )} , PALABRA_BUSCAR[2],matriz)){
          vecesEncontrado++;
        }
        if(revisarVecino({fila:moverPosicion(fila - 1,cantidadFilas ), columna} , PALABRA_BUSCAR[1],matriz) && revisarVecino({fila:moverPosicion(fila - 2,cantidadFilas ), columna} , PALABRA_BUSCAR[2],matriz)){
          vecesEncontrado++;
        }
        if(revisarVecino({fila:moverPosicion(fila + 1,cantidadFilas ) , columna} , PALABRA_BUSCAR[1],matriz) && revisarVecino({fila:moverPosicion(fila + 2,cantidadFilas ) , columna} , PALABRA_BUSCAR[2],matriz)){
          vecesEncontrado++;
        }
        if(revisarVecino({fila:moverPosicion(fila + 1,cantidadFilas ),columna:moverPosicion(columna + 1,cantidadColumnas )} , PALABRA_BUSCAR[1],matriz) && revisarVecino({fila:moverPosicion(fila + 2,cantidadFilas ) , columna:moverPosicion(columna + 2,cantidadColumnas )} , PALABRA_BUSCAR[2],matriz)){
          vecesEncontrado++;
        }
        if(revisarVecino({fila:moverPosicion(fila - 1,cantidadFilas ),columna:moverPosicion(columna - 1,cantidadColumnas )} , PALABRA_BUSCAR[1],matriz) && revisarVecino({fila:moverPosicion(fila - 2,cantidadFilas ) , columna:moverPosicion(columna - 2,cantidadColumnas )} , PALABRA_BUSCAR[2],matriz)){
          vecesEncontrado++;
        }
        if(revisarVecino({fila:moverPosicion(fila - 1,cantidadFilas ),columna:moverPosicion(columna + 1,cantidadColumnas )} , PALABRA_BUSCAR[1],matriz) && revisarVecino({fila:moverPosicion(fila - 2,cantidadFilas ) , columna:moverPosicion(columna + 2,cantidadColumnas )} , PALABRA_BUSCAR[2],matriz)){
          vecesEncontrado++;
        }
        if(revisarVecino({fila:moverPosicion(fila + 1,cantidadFilas ),columna:moverPosicion(columna - 1,cantidadColumnas )} , PALABRA_BUSCAR[1],matriz) && revisarVecino({fila:moverPosicion(fila + 2,cantidadFilas ) , columna:moverPosicion(columna - 2,cantidadColumnas )} , PALABRA_BUSCAR[2],matriz)){
          vecesEncontrado++;
        }
      }
    }
  }
  return vecesEncontrado; 
}

const revisarVecino = (coordenada,letraBuscada,matriz) =>{
  let {fila,columna} = coordenada
  return matriz[fila][columna] === letraBuscada
}

const moverPosicion = (numero, longitud) =>{
  if(longitud === 1)  return 0;
  if(numero >= longitud) return numero - longitud;
  if(numero < 0 ) return numero + longitud;
  return numero;
}

const sopaDeLetras = (filas,columnas) =>{
  if(!filas && !columnas){
    return "Se debe ingresar la cantidad de filas y columnas";
  }else if(!filas){
    return "Se debe ingresar la cantidad de filas";
  }else if(!columnas){
    return "Se debe ingresar la cantidad de columnas";
  }
  const matriz = generarMatrizRandom(filas,columnas);

  console.log("Usando la matriz de prueba ");

  imprimirMatriz(3,MATRIZ_PRUEBA);
  
  console.log(`La palabra ${PALABRA_BUSCAR} fue encontrada ${calcular(filas,columnas,MATRIZ_PRUEBA)} veces`);

  console.log("Usando la matriz random ");

  imprimirMatriz(filas,matriz);

  console.log(`La palabra ${PALABRA_BUSCAR} fue encontrada ${calcular(filas,columnas,matriz)} veces`);

}

const generarMatrizRandom = (filas,columnas) =>{
  let matriz = [];
  for(let fila = 0; fila < filas; fila++){
    matriz[fila] = [];
    for(let columna = 0; columna < columnas ; columna++){
      let indiceRandom = generarIndiceRandom();
      matriz[fila].push(ALFABETO[indiceRandom]);
    }
  }
  return matriz;
}

const generarIndiceRandom = () =>{
  return Math.floor(Math.random() * (ALFABETO.length - 1));
}

const imprimirMatriz = (filas,matriz) =>{
  for(let fila = 0; fila < filas ; fila++){
    console.log(matriz[fila]);
  }
}

sopaDeLetras(3,3);