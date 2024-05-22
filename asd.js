const initialBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const solutionBoard = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const boardElement = document.getElementById('sudokuBoard');

function createBoard() {
    initialBoard.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('sudoku-cell');
            
            if (cell !== 0) {
                const inputElement = document.createElement('input');
                inputElement.type = 'text';
                inputElement.value = cell;
                inputElement.disabled = true;
                cellElement.appendChild(inputElement);
            } else {
                const inputElement = document.createElement('input');
                inputElement.type = 'text';
                inputElement.maxLength = 1;
                inputElement.addEventListener('input', (e) => {
                    if (!/^[1-9]$/.test(e.target.value)) {
                        e.target.value = '';
                    }
                });
                cellElement.appendChild(inputElement);
            }

            boardElement.appendChild(cellElement);
        });
    });
}

function checkBoard() {
    const cells = document.querySelectorAll('.sudoku-cell input');
    let correct = true;

    cells.forEach((cell, index) => {
        const row = Math.floor(index / 9);
        const col = index % 9;

        if (cell.disabled) {
            cell.classList.remove('correct', 'incorrect');
            return;
        }

        if (parseInt(cell.value) === solutionBoard[row][col]) {
            cell.classList.add('correct');
            cell.classList.remove('incorrect');
        } else {
            cell.classList.add('incorrect');
            cell.classList.remove('correct');
            correct = false;
        }
    });

    if (correct) {
        alert('Gratulálunk, minden szám helyes!');
    }
}

document.getElementById('checkButton').addEventListener('click', checkBoard);

createBoard();