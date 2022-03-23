//var pode ser declaro depois, podendo causar variaveis com o mesmo nome

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;

//let precisa ser declarada antes, valores podem ser alterados

let forma = 'retângulo';
let alturaLet = 5;
let comprimentoLet = 7;

let areaLet;

if(forma === 'retângulo'){
    areaLet = alturaLet * comprimentoLet;
} else {
    areaLet = (alturaLet * comprimentoLet) / 2;
}

console.log(areaLet);

// const não pode ser alterado o valor e precisa ser declarado o valor

const formaConst = "quadrada";
const alturaConst = 5;
const comprimentoConst = 7;
let areaConst;


if (formaConst === "quadrada"){
    areaConst = alturaConst * comprimentoConst;
} else {
    areaConst = (alturaConst * comprimentoConst) / 2;
}

console.log(areaConst)



