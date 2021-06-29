'use strict';
// 0 x x x x x x x x x
// x x x x x x x x x x
// x x x x x x x x x x
// x x x x x x x x x x
// x x x x x x x x x x
// x x x x x x x x x x
// x x x x x x x x x x
// x x x x x x x x x x
// x x x x x x x x x x
// x x x x x x x x x x

const settings = {
    rowCount: 10,
    colCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};

const player = {
    x: null,
    y: null,

    init(startX, startY) { // init(0, 0);
        this.x = startX;
        this.y = startY;
    },

    move(direction) {
        switch (direction) {
            case 2:
                this.y++;
                break;
            case 4:
                this.x--;
                break;
            case 6:
                this.x++;
                break;
            case 8:
                this.y--;
        }
    }
};

const game = {
    settings,
    player,

    run() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);

        while (true) {
            this.render();

            const direction = this.getDirection();

            if (direction === -1) return alert('Game Over!');

            this.player.move(direction);
        }
    },

    render() {
        let map = '';

        for (let row = 0; row < this.settings.rowCount; row++) {
            for (let col = 0; col < this.settings.colCount; col++) {
                if (this.player.y === row && this.player.x === col) map += '0 ';
                else map += 'X ';
            }

            map += '\n';
        }

        console.clear();
        console.log(map);
    },

    getDirection() {
        const availableDirections = [-1, 2, 4, 6, 8];

        while (true) {
            const direction = parseInt(prompt('Введите число, куда хотите переместиться, -1 для выхода.'));

            if (!availableDirections.includes(direction)) {
                alert('Укажите одно из допустимых значений - ' + availableDirections.join(', '));
                continue;
            }

            return direction;
        }
    },
};

game.run();
