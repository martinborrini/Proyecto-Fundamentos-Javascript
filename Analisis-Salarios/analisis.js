/* HELPERS */

// Calculo de media aritmetica
function calcMediaArit(list) {
    const sumList = list.reduce(
        function(valueAcum = 0, newElement) {
            return valueAcum + newElement;
        }
    );
    const promList = sumList / list.length;
    return promList;
}

// Calculo numero par e impar
function esPar(number) {
    if (number % 2 === 0) {return true;}
    else {return false;}
}

// Realizar un mapeo de los valores y extraer unicamente los salarios
const salaryArg = argentina.map(function(person){return person.salary;});

// Ordenar los salarios de menor a mayor
const salaryArgSorted = salaryArg.sort(function(a,b){return a - b});

// Calculo de la mediana de los salarios 
function medianaSalary(list) {
    const middle = parseInt(list.length / 2);
    if (esPar(list.length)) {
        const personMiddle1 = list[middle - 1];
        const personMiddle2 = list[middle];
        const mediana = calcMediaArit([personMiddle1, personMiddle2]);
        return mediana;
    } else {
        const personMiddle = list[middle];
        return personMiddle;
    }
}

// Mediana general de salarios guardados en una variable
const medianaGeneralArg = medianaSalary(salaryArgSorted);

// TOP 10% DE SALARIOS

// Mediana Top 10%
const spliceStart = (salaryArgSorted.length * 90) / 100;
const spliceCount = salaryArgSorted.length - spliceStart;
const salaryTopTenArg = salaryArgSorted.splice(spliceStart, spliceCount);

// Mediana del Top 10% guardado en una varaible
const medianaTopTen = medianaSalary(salaryTopTenArg);

console.log(
    {
        medianaGeneralArg,
        medianaTopTen,
    }
);