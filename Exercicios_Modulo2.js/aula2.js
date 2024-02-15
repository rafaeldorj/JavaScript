// Exercicio 1

const numero1 = 43
const numero2 = 10
const resultado = [numero1 + numero2, numero1 - numero2, numero1 * numero2, numero1 / numero2]

console.log(resultado[0])
console.log(resultado[1])
console.log(resultado[2])
console.log(resultado[3])

//Exercicio 2

let notas = [6, 3, 10]

media = (notas[0] + notas[1] + notas[2]) / notas.length
media = parseFloat(media.toFixed(1))

console.log('Sua média é: ' + media)

//Exercicio 3

const matriz  = [
    [5, 10],
    [3, 15]
]

let calculo10 = (matriz[0][0] * matriz[1][1]) - (matriz[1][0] * matriz[0][1]) 

console.log(calculo10)

//Exericio 4

let coordX = [200, 500, 800, 1000]
let coordY = [150, 350, 650, 850]

let somaCoord = (coordX[0] * coordY[0]) + (coordX[1] * coordY[1]) + (coordX[2] * coordY[2]) + (coordX[3] * coordY[3])

console.log(somaCoord)

//Exercicio 5

const numeros = [3, 8, 15, 21, 30, 37, 42];

numeros.splice(0, 1)
numeros.splice(1, 2)
numeros.splice(2, 1)

console.log(numeros)

//Exercicio 6

const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"]

const novoArray = nomes.filter(nome => nome.length >= 5 && nome)

console.log("Nomes com 5 letras ou mais:", novoArray)

//exercicio 7

const idades = [15, 22, 17, 20, 30, 12]

const maiorouigual18 = idades.findIndex(idade => idade >= 18)

console.log("Índice do primeiro elemento que aparece >= a 18 é:", maiorouigual18)

// Exercicio 8

const idades1 = [15, 22, 17, 20, 30, 12]

const indice = idades1.reverse().findIndex(idade => idade >= 18)

const lastindex18orbigger = indice !== -1 ? idades1.length - 1 - indice : -1

console.log("o índice do último elemento que aparece e seja >= a 18:", lastindex18orbigger)

//exercicio 9

const notas5 = [8, 9, 7, 5, 10, 6]

notas5.pop()
notas5.shift()

somaNotas = notas5[0] + notas5[1] + notas5[2] + notas5[3]
mediaAritmetica = (somaNotas / notas5.length)

console.log(mediaAritmetica)

//Exercicio 10

const palavras = ["Este", "é", "um", "exercício", "interessante"];

const novaString = palavras.join(" ");

console.log(novaString);