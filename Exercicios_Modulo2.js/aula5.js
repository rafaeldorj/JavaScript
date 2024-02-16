//Exercicio 1

let numero = 10;

while (numero >= 1) {
    console.log(numero--)
}

//Exercicio 2

let numero1 = parseInt(prompt("Digite um número >1:"));
let primo = true;

let divisor = 2;
while (divisor < numero1 && primo) {
    if (numero1 % divisor === 0) {
        primo = false;
    }
    divisor++;
}

console.log(primo && numero1 > 1 ? numero1 + " é um número primo." : numero1 + " não é um número primo.");

//Exercicio 3

let total = 0;
let numeroInt = parseInt(prompt('Digite um numero inteiro: '));

while (numeroInt !== 0) {
    if (numeroInt % 2 === 0) {
        total += numeroInt;
    }
    numeroInt = parseInt(prompt('Digite outro numero inteiro (ou 0 para sair): '));
}

console.log("A soma dos números pares inseridos é: " + total)

//Exercicio 4

alert("Jogo do Acerte o número")
let numeroMaximo = 100
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1
console.log(numeroSecreto)
let chute
let tentativas = 0;


while (chute !== numeroSecreto) {
    chute = parseInt(prompt("Chute um número entre 1 e " + numeroMaximo + ":"))

    if (chute === numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
            alert("O número secreto é menor que " + chute)
        } else {
            alert("O número secreto é maior que " + chute)
        }
        tentativas++
    }
}

tentativas++


let palavraTentativa = tentativas === 1 ? 'tentativa' : 'tentativas'
alert("Você acertou! O número era " + numeroSecreto + " e você acertou com " + tentativas + " " + palavraTentativa + ".")

//exercicio 5

alert("Jogo do Acerte o número")
let numeroMaximo2 = 100
let numeroSecreto2 = Math.floor(Math.random() * numeroMaximo2) + 1
console.log(numeroSecreto2)
let chute2
let tentativas2 = 0

while (chute2 !== numeroSecreto2 && tentativas2 < 10) {
    chute2 = parseInt(prompt("Chute um número entre 1 e " + numeroMaximo2 + ":"))
    
    if (chute2 === numeroSecreto2) {
        break
    } else {
        if (chute2 > numeroSecreto2) {
            alert("O número secreto é menor que " + chute2)
        } else {
            alert("O número secreto é maior que " + chute2)
        }
        tentativas2++
    }
}

if (chute2 === numeroSecreto2) { 
    tentativas2++
    let palavraTentativa2 = tentativas2 === 1 ? 'tentativa' : 'tentativas'
    alert("Você acertou! O número era " + numeroSecreto2 + " e você acertou com " + tentativas2 + " " + palavraTentativa2 + ".")
} else {
    alert("Suas tentativas acabaram! O número secreto era " + numeroSecreto2 + ".")
}

