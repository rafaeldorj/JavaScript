// Variáveis globais
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Função para jogar
function play(cellIndex) {
    // Verifica se a célula está vazia
    if (!gameBoard[cellIndex]) {
        gameBoard[cellIndex] = currentPlayer;
        render();
        // Verifica se houve um vencedor
        if (checkWin()) {
            alert(currentPlayer + ' ganhou!');
            reset();
        } else if (!gameBoard.includes('')) {
            // Verifica se houve empate
            alert('Empate!');
            reset();
        } else {
            // Alterna entre os jogadores
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Função para verificar se há um vencedor
function checkWin() {
    return winningCombos.some(combo => {
        return combo.every(index => {
            return gameBoard[index] === currentPlayer;
        });
    });
}

// Função para atualizar a visualização do tabuleiro
function render() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = gameBoard[index];
        cell.className = 'cell';
        if (gameBoard[index] === 'X') {
            cell.classList.add('x');
        } else if (gameBoard[index] === 'O') {
            cell.classList.add('o');
        }
    });
}

// Função para reiniciar o jogo
function reset() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    render();
}
