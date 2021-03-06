'use strict';
const tickTacToe = {
    gameTableElement: document.getElementById('game'),
    status: 'playing',
    phase: 'X',
    mapValues: [
        ['', '', ''], // => X0X === XXX || 000
        ['', '', ''],
        ['', '', ''],
    ],

    init() {
        this.renderMap();
        this.initEventHandlers();
    },

    renderMap() {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);

            for (let col = 0; col < 3; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
            }
        }
    },

    initEventHandlers() {
        this.gameTableElement
            .addEventListener('click', (event) => this.cellClickHandler(event));
    },

    cellClickHandler(event) {
        // console.log(event.target);
        if (!this.isCorrectClick(event)) return;

        this.fillCell(event);

        if (this.hasWon()) {
            this.setStatusStopped();
            this.sayWonPhrase();
        }

        this.togglePhase();
    },

    isCorrectClick(event) {
        return this.isStatusPlaying()
            && this.isClickByCell(event)
            && this.isCellEmpty(event);
    },

    isStatusPlaying() {
        return this.status === 'playing';
    },

    isClickByCell(event) {
        return event.target.tagName === 'TD';
    },

    isCellEmpty(event) {
        const row = +event.target.dataset.row;
        const col = +event.target.dataset.col;

        return this.mapValues[row][col] === '';
    },

    fillCell(event) {
        const row = +event.target.dataset.row;
        const col = +event.target.dataset.col;

        this.mapValues[row][col] = this.phase;
        event.target.textContent = this.phase;
    },

    hasWon() {
        return this.isLineWon({x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}) ||
            this.isLineWon({x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}) ||
            this.isLineWon({x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}) ||

            this.isLineWon({x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}) ||
            this.isLineWon({x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}) ||
            this.isLineWon({x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}) ||

            this.isLineWon({x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}) ||
            this.isLineWon({x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0});
    },

    isLineWon(a, b, c) {
        const stringToCheck = this.mapValues[a.y][a.x]
            + this.mapValues[b.y][b.x]
            + this.mapValues[c.y][c.x];

        return stringToCheck === 'XXX' || stringToCheck === '000';
    },

    setStatusStopped() {
        this.status = 'stopped';
    },

    sayWonPhrase() {
        const figure = this.phase === 'X' ? '????????????????' : '????????????';

        alert(figure + ' ????????????????!');
    },

    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    },
};

tickTacToe.init();
