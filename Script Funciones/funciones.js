// Sesión de funciones

/*

Hoisting:

Es fundamental en el entendimiento de la forma en que se ejecuta nuestro código de 35, esto aplica tanto para variables como para funciones.

La traducción de hoisting es "elevación".
Lo que hace es "elevar" las funciones y variables declaradas dentro del código.

Yo puedo invocar una función antes de siquiera declararla.

*/

// Funciones, invocación y declaración

// Declaración de una función

/* 

palabra reservada - function
nombre de la funcion - nombreFuncion
establecer parámetros - recibe de 0 a n parámetros y se encasillan dentro de un paréntesis ()

establecer el bloque de código sobre el que vamos a trabajar
lo hacemos mediante llaves {
    código a ejecutar
}

*/
//Ejemplo de funcion que no retonra ningun valor
//No recibe ningún parámetro
nuevaFuncion();

function nuevaFuncion(){
    console.log("Buenos días CH28");
}

/*

Scope : 

El concepto scope hace referencia al alcance que tiene
una variable dentro de un código JS.

var, let y const.

var : global - quiere decir que se puede utilizar o
trabajar con esta variable dentro de cualquier
parte del código

let : porque además de funcionar de manera global
en caso de ser requerida, también puede solo ser
utilizada de manera local.

const : se refiere, por su nombre tan intuitivo,
a la palabra constante, esto quiere decir que su
valor no puede ser reasignado.

El uso de la palabra reservada 'var' no es tan recomendado
por el comportamiento y la poca adaptabilidad de una
variable.

Entonces, se implementan let y const como una 
alternativa mucho más eficiente para determinar el 
Scope o alcance que tiene una variable.

*/

//Ejemplo de función que SÍ retorna un valor

function holaMundo(nombre){
    return "Hola" + nombre; //sí retorna un valor
}
//console.log(holaMundo("Fernanda"));
//holaMundo();

/*
Elaborar una función que calcule la velocidad de un objeto

-Velocidad = distancia / tiempo

-function

-calcularVelocidad
(distancia, tiempo)

-elaborar el bloque de código

*/

function calcularVelocidad(distancia, tiempo){ //inicio
    return "La velocidad calculada es " + distancia/tiempo + " m/s";
} //cierre

console.log(calcularVelocidad());


// Funciones dentro de JS

/*
Función flecha o lambda
*/

//Funcion general
function funcionNormal (parametro){
    return "Hola " + parametro;
}

//Función flecha - Arrow function
const funcionFlecha = parametro => "Hola " + parametro;

//Funcion flecha con 2 o más parámetros
const funcionVariosParametros = (datoA, datoB) => {
    let datoC = datoA + datoB;
    return "La suma de datoA + datoB = " + datoC;

}

//Función flecha SIN PARÁMETRO
const funcionSinParametros = () => {
    return "funcion flecha que no recibe parametros"
}

////////////////////////

// Funcion flecha para calcular la velocidad

const calcularVelocidadFlecha = (distanciaFlecha, tiempoFlecha) => {
    
    console.log("Distancia = " + distanciaFlecha + " metros");
    console.log("Tiempo = " + tiempoFlecha + " segundos");
    return "La velocidad calculada es = " + distanciaFlecha / tiempoFlecha + " m/s";
}