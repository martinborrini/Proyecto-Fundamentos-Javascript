// Calculo de promedio SIN reduce

/*
function calcularMediaAritmetica(lista) {
    let sumaLista = 0;
    for(let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    const promediolista = sumaLista / lista.length;
    return promediolista;
}
*/

// Calculo de promedio CON reduce

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promediolista = sumaLista / lista.length;
    return promediolista;
}

// Calculo de la Media

function calcularMedia() {
    /* Tomar valores de HTML */
    const entradaMedia = document.getElementById("inputMedia");
    const mediaValue = entradaMedia.value;
    /* Convertir los valores de strign a number */
    const lista = Array.from(mediaValue.split(","), Number);
    /* Definir una variable la cual llama a la funcion de calculo de media general en scope global */
    const media = calcularMediaAritmetica(lista);
    /* Retornar los valores a HTML */
    const mostrarResultado = document.getElementById("resultadoMedia");
    mostrarResultado.innerText = "La media es de: " + media;
}

// Calculo de la Mediana

function calcularMediana() {
    /* Tomar valores de HTML */
    const entradaMediana = document.getElementById("inputMediana");
    const medianaValue = entradaMediana.value;
    /* Convertir los valores de strign a number */
    const lista = Array.from(medianaValue.split(","), Number);
    /* Ordenar la lista de numeros de menor a mayor*/
    const listaOrdenada = lista.sort(function(a,b){return a - b});
    /* Encontrar el valor del medio de la lista de numeros ordenados */
    const mitadLista = parseInt(listaOrdenada.length / 2);
    /* Definir una funcion que permita determinar si la lista de numeros es par o impar */
    function esPar(numero) {
        if(numero % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    /* Definir una variable donde se va a guardar la mediana */
    let mediana;
    /* Condicional de la mediana si es par o impar */
    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista -1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
    }
    else {
        mediana = listaOrdenada[mitadLista];
    }
    /* Retornar los valores a HTML */
    const mostrarResultado = document.getElementById("resultadoMediana");
    mostrarResultado.innerText = "La mediana es de: " + mediana;
}

// Calculo de la Moda

function calcularModa() {
    /* Tomar valores de HTML */
    const entradaModa = document.getElementById("inputModa");
    const modaValue = entradaModa.value;
    /* Convertir los valores de strign a number */
    const lista = Array.from(modaValue.split(","), Number);
    /* Crear una variable donde se guarda un objeto vacio que se llena con un map */
    const listaContador = {};
    /* Realizar un map para recorrer el array y lo devuelve a la listaContador con la cantidad de veces que se repite cada valor */
    lista.map(
        function (elemento) {
            if (listaContador[elemento]) {
                listaContador[elemento] += 1;
            }
            else {
                listaContador[elemento] = 1;
            }
        }
    );
    /* Ordenar la lista de numeros de acuerdo a la cantidad de veces que se repite cada numero de menor a mayor */
    const listaOrdenada = Object.entries(listaContador).sort(function (a,b){return a[1] - b[1]});
    /* Ingresar al ultimo valor del array donde se guarda la moda */
    const moda = listaOrdenada[listaOrdenada.length - 1];
    /* Retornar los valores a HTML */
    const mostrarResultado = document.getElementById("resultadoModa");
    mostrarResultado.innerText = "La Moda es de: " + moda[0] + ". Y se repite: " + moda[1] + " veces.";
}

