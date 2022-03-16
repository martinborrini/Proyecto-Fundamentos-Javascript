// Codigo del cuadrado

console.group("Cuadrados");

function PerimetroCuadrado(lado) {
    return lado * 4;
}

function AreaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo

console.group("Triangulos");

function PerimetroTriangulo(lado, base) {
    return lado * 2 + base;
}

function AreaTriangulo(lado, base) {
    return (lado * base) / 2;
}

console.groupEnd();

// Codigo del circulo

console.log("Circulos");

// Valor de PI

const PI = Math.PI;

// diametro 

function DiametroCirculo(radio) {
    return radio * 2;
}

function PerimetroCirculo(radio) {
    const diametro = DiametroCirculo(radio);
    return diametro * PI
}

function AreaCirculo(radio) {
    return (radio * radio) * PI
}

console.groupEnd();


// INTERACCION CON HTML

function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //con esto obtengo el valor que introducen los usuarios
    const perimetro = PerimetroCuadrado(value); //ejecuta la funcion del perimetro con el valor del value
    alert(perimetro);
}

function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = AreaCuadrado(value);
    alert(perimetro);
}