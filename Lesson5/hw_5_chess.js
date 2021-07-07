/*
    1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/
'use strict'
function drawChessBoard() {
    const chessboard = document.querySelector('.chessboard');

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            if (i == 8) {
                cell.innerText = 'ABCDEFGH'.charAt(j - 1);
                cell.className = 'cell';
            }
            else if (j == 0) {
                cell.innerText = 8 - i;
                cell.className = 'cell';
            }
            else if (i % 2 == j % 2) cell.className = 'cell white';
            else cell.className = 'cell black';

            chessboard.appendChild(cell);
        }
    }
}

drawChessBoard();