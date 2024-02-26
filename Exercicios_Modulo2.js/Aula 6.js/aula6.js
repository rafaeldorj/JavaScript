//Exercicio 1

let soma = 0;

for (let i = 1; i <= 10; i++) {
    soma += i;
    console.log(`+ ${i} = ${soma}`);
}

console.log("Resultado final: " + soma);

//Exercicio 2

let pessoa = {
    nome: "Rafael",
    idade: 26,
    cidade: "Rio de Janeiro"
};

for (let propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

//Exercicio 3

let frutas = ["Maçã", "Banana", "Laranja", "Morango", "Uva"];

for (let fruta of frutas) {
    console.log(fruta);
}

//Exercicio 4

const numero = 8;

console.log(`Tabuada de ${numero}:`);

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

//Exercicio 5

let valores = { valor1: 10, valor2: 20, valor3: 30, valor4: 40 };
let soma2 = 0;

for (let chave in valores) {
    soma2 += valores[chave];
}

console.log("A soma dos valores é:", soma2);

//Exercicio 6

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeroDesejado = 7;
let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroDesejado) {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log("Achei o número", numeroDesejado);
} else {
    console.log("Número não encontrado");
}

//Exercicio 7

function fibonacci(N) {
    let sequencia = [1, 1]; 

    for (let i = 2; i < N; i++) {
        let proximoTermo = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximoTermo);
    }

    return sequencia.slice(0, N); 
}


console.log(fibonacci(6)); 
console.log(fibonacci(14));

//Exercicio 8


const palavra = prompt("insira uma palavra:");


const palavraLowerCase = palavra.toLowerCase();

let contadorVogais = 0;

for (let i = 0; i < palavraLowerCase.length; i++) {
    const letra = palavraLowerCase[i];
    
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contadorVogais++;
    }
}


console.log(`A palavra "${palavra}" contém ${contadorVogais} vogais.`);

//Exercicio 9

function insertionSort(array) {
    const len = array.length;
    for (let i = 1; i < len; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}


const novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9];
const arrayOrdenado = insertionSort(novoArray.slice());
console.log("Array ordenado:", arrayOrdenado);
