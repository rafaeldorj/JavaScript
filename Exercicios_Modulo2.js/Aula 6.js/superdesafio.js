
// Super Desafio
// 10 - Fazer um simulador de rolagem de dados, que receba como input N
// dados de 6 lados e mostre as rolagens individuais e a soma dos
// valores
// Entradas:
// Quantidade de dados: 2


function rolarDados(quantidadeDados) {
    let soma = 0;
    let rolagensIndividuais = [];

    for (let i = 0; i < quantidadeDados; i++) {
        const resultado = Math.floor(Math.random() * 20) + 1;
        soma += resultado;
        rolagensIndividuais.push(resultado);
    }

    console.log("Rolagens individuais:");
    rolagensIndividuais.forEach((resultado, index) => {
        console.log(`Dado ${index + 1}: ${resultado}`);
    });
    
    console.log(`Soma dos valores: ${soma}`);
}

const quantidadeDados = 2;
rolarDados(quantidadeDados);
