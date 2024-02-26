function rolarDados(quantidadeDados, quantidadeLados, quantidadeTentativas) {
    for (let t = 0; t < quantidadeTentativas; t++) {
        let soma = 0;
        let rolagensIndividuais = [];

        for (let i = 0; i < quantidadeDados; i++) {
            const resultado = Math.floor(Math.random() * quantidadeLados) + 1;
            soma += resultado;
            rolagensIndividuais.push(resultado);
        }

        console.log(`\nTentativa ${t + 1}:`);
        console.log("Rolagens individuais:");
        rolagensIndividuais.forEach((resultado, index) => {
            console.log(`Dado ${index + 1}: ${resultado}`);
        });
        
        console.log(`Soma dos valores: ${soma}`);
    }
}

const quantidadeDados = 3;
const quantidadeLados = 9;
const quantidadeTentativas = 3;
rolarDados(quantidadeDados, quantidadeLados, quantidadeTentativas);
