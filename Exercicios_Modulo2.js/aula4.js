// Exercicio 1

const numero = 9;


if (numero % 2 === 0) {
  console.log("É par");
} else {
  console.log("É ímpar");
}

//Exercicio 2


const nota = 10;


if (nota >= 90) {
  console.log("Aprovado com mérito");
} else if (nota >= 70 && nota < 90) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

//Exercicio 3


const numero1 = 15;
const numero2 = 30;
const numero3 = 10;


let maiorNumero = numero1;

if (numero2 > maiorNumero) {
  maiorNumero = numero2;
}

if (numero3 > maiorNumero) {
  maiorNumero = numero3;
}

console.log("O maior número é:", maiorNumero);

//Exercicio 4


const lado1 = 5;
const lado2 = 5;
const lado3 = 5;


if (lado1 === lado2 && lado2 === lado3) {
  console.log("Triângulo equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  console.log("Triângulo isósceles");
} else {
  console.log("Triângulo escaleno");
}

//Exercicio 5


const ano = 2001;


if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  console.log(ano + " é um ano bissexto");
} else {
  console.log(ano + " não é um ano bissexto");
}

//Exercicio 6


const idade = 20;


if (idade >= 18) {
  console.log("Você pode dirigir.");
} else {
  console.log("Você não pode dirigir.");
}

//Exercicio 7


const num = 8;


switch (num % 2) {
  case 0:
    console.log("É par");
    break;
  case 1:
    console.log("É ímpar");
    break;
}

//Exercicio 8

const letra = prompt("Digite uma letra:").toLowerCase();


switch (letra) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log("É uma vogal");
    break;
  default:
    console.log("É uma consoante");
}

//Exercicio 9

const mes = prompt("Qual mês deseja verificar a estação?").toLowerCase();

switch(mes) {
    case 'dezembro':
    case 'janeiro':
    case 'fevereiro':
        console.log("Inverno");
        break;
    case 'março':
    case 'abril':
    case 'maio':
        console.log("Primavera");
        break;
    case 'junho':
    case 'julho':
    case 'agosto':
        console.log("Verão");
        break;
    case 'setembro':
    case 'outubro':
    case 'novembro':
        console.log("Outono");
        break;
    default:
        console.log("Mês invalido");
}