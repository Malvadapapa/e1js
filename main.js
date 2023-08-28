 
 //1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
 let numeroParoImpar = 3

 const parOImpar = (n) => {
if (n%2===0) {
    console.log('El numero del ejercicio 1 es Par!') 
} else{
    console.log('El numero del ejercicio 1 es impar!')
}
 }
 parOImpar(numeroParoImpar)

 //2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

let numeroEj2A = 45;
let numeroEj2B = 45;

const numeroMayorMenor = (n1,n2)=> {
if (n1===n2) {
   return console.log('Los numeros del ejercicio dos son iguales')
} else if (n1 > n2) {
     return console.log('El primer numero ingresado es mayor al segundo')
    
} else {
    return console.log('El segundo numero ingresado es mayor al primero')
}
};
numeroMayorMenor(numeroEj2A,numeroEj2B)


//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
let nMultiplo = 17;

const esMultiploDe5 = (n) => {
    if (n%5===0) {
        return console.log(`El numero ${n} es multiplo de 5`)
    } else {
        return console.log(`El numero ${n} NO es multiplo de 5`)
    }
}
esMultiploDe5(nMultiplo)

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.58

let numeroQueParaElCiclo = 4;

const contador = (n) => {
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
    return
}
contador(numeroQueParaElCiclo)

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

let palabraCiclica = 'pato';
let numeroDevecesQueDigoLaPalabra = 5
const imprimirPalabra = (n,palabra) => {
    for (let i = 1; i <= n; i++) {
      console.log(palabra)
    }
    return
}
imprimirPalabra(numeroDevecesQueDigoLaPalabra,palabraCiclica)

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
 let arrayARecorrer = [1,2,'pato',true, 'comosiama']

 const imprimirValoresArray = (array) => {
    array.forEach((i, index) => {
console.log(`En el indice ${index} hay el siguiente valor: ${i}`)        
    });
 }
 imprimirValoresArray(arrayARecorrer)

 //7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

 let arrayDeNumeros = [1,2,3,4,5,6,7,8,9,10]

 const saltearEl5 = (array) => {
    for (let i = 0; i < array.length; i++) {
       if (i === 5) {
        continue
       }
        console.log(array[i])
    }
 }
 saltearEl5(arrayDeNumeros)

 //8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

 let arrayDeNumerosParaMultiplicar = [1,2,3,4,5,6,7,8,9,10]
 let multiplo = 8

 const multiplicarIndicesArray = (array, n) => {
    array.forEach((e) =>{
        console.log(`${e} x ${n} = ${e*n}`)
    })
 }
 multiplicarIndicesArray(arrayDeNumerosParaMultiplicar, multiplo)