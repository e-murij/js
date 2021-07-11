"use strict";
const settings = {
  rowsCount: 21,
  colsCount: 21,
  speed: 2,
  winFoodCount: 50,
};

const config = {
  settings,

  init(userSettings) {
    Object.assign(this.settings, userSettings);
  },

  getRowsCount() {
    return this.settings.rowsCount;
  },

  getColsCount() {
    return this.settings.colsCount;
  },

  getSpeed() {
    return this.settings.speed;
  },

  getWinFoodCount() {
    return this.settings.winFoodCount;
  },

  validate() {
    const result = {
      isValid: true,
      errors: [],
    };

    if (this.getRowsCount() < 10 || this.getRowsCount() > 30) {
      result.isValid = false;
      result.errors.push('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
    }

    if (this.getColsCount() < 10 || this.getColsCount() > 30) {
      result.isValid = false;
      result.errors.push('Неверные настройки, значение colsCount должно быть в диапазоне [10, 30].');
    }

    if (this.getSpeed() < 1 || this.getSpeed() > 10) {
      result.isValid = false;
      result.errors.push('Неверные настройки, значение speed должно быть в диапазоне [1, 10].');
    }

    if (this.getWinFoodCount() < 5 || this.getWinFoodCount() > 50) {
      result.isValid = false;
      result.errors.push('Неверные настройки, значение winFoodCount должно быть в диапазоне [5, 50].');
    }

    return result;
  },
};

const map = {
  cells: {},
  usedCells: [],

  init(rowsCount, colsCount) {
    const table = document.getElementById('game');
    table.innerHTML = '';

    this.cells = {};
    this.usedCells = [];

    for (let row = 0; row < rowsCount; row++) {
      const tr = document.createElement('tr');
      tr.classList.add('row');
      table.appendChild(tr);

      for (let col = 0; col < colsCount; col++) {
        const td = document.createElement('td');
        td.classList.add('cell');
        tr.appendChild(td);

        this.cells[`x${col}_y${row}`] = td; // { x4_y6: tdElem, ... }
      }
    }
  },

  render(snakePointsArray, foodPoint, barrierPoints) {
    for (const cell of this.usedCells) {
      cell.className = 'cell';
    }

    this.usedCells = [];

    snakePointsArray.forEach((point, index) => {
      const snakeCell = this.cells[`x${point.x}_y${point.y}`];
      snakeCell.classList.add(index === 0 ? 'snakeHead' : 'snakeBody');
      this.usedCells.push(snakeCell);
    });

    const foodCell = this.cells[`x${foodPoint.x}_y${foodPoint.y}`];
    foodCell.classList.add('food');
    this.usedCells.push(foodCell);


    barrierPoints.forEach((point, index) => {
      const barrierCell = this.cells[`x${point.x}_y${point.y}`];
      barrierCell.classList.add('barrier');
      this.usedCells.push(barrierCell);
    });
  },
};

const snake = {
  body: [],
  direction: null,
  lastStepDirection: null,
  maxX: null,
  maxY: null,

  init(startBody, direction, maxX, maxY) {
    this.body = startBody;
    this.direction = direction;
    this.lastStepDirection = direction;
    this.maxX = maxX;
    this.maxY = maxY;
  },

  getBody() {
    return this.body;
  },

  getLastStepDirection() {
    return this.lastStepDirection;
  },

  setDirection(direction) {
    this.direction = direction;
  },

  isOnPoint(point) {
    return this.getBody().some((snakePoint) => {
      return snakePoint.x === point.x && snakePoint.y === point.y;
    });
  },

  makeStep() {
    this.lastStepDirection = this.direction;
    this.getBody().unshift(this.getNextStepHeadPoint());
    this.getBody().pop();
  },

  growUp() {
    const lastBodyIndex = this.getBody().length - 1;
    const lastBodyPoint = this.getBody()[lastBodyIndex];
    const lastBodyPointClone = Object.assign({}, lastBodyPoint);
    // const lastBodyPointClone = {...lastBodyPoint};

    this.getBody().push(lastBodyPointClone);
  },

  getNextStepHeadPoint() {
    const firstPoint = this.getBody()[0];

    switch (this.direction) {
      case 'up':
        return { x: firstPoint.x, y: firstPoint.y !== 0 ? firstPoint.y - 1 : this.maxY };
      case 'right':
        return { x: firstPoint.x !== this.maxX ? firstPoint.x + 1 : 0, y: firstPoint.y };
      case 'down':
        return { x: firstPoint.x, y: firstPoint.y !== this.maxY ? firstPoint.y + 1 : 0 };
      case 'left':
        return { x: firstPoint.x !== 0 ? firstPoint.x - 1 : this.maxX, y: firstPoint.y };
    }
  },
};

const food = {
  x: null,
  y: null,

  getCoordinates() {
    return {
      x: this.x,
      y: this.y,
    };
  },

  setCoordinates(point) {
    this.x = point.x;
    this.y = point.y;
  },

  isOnPoint(point) {
    return this.x === point.x && this.y === point.y;
  },
};

const barrier = {
  points: [],

  getCoordinates() {
    return this.points
  },

  setCoordinates(point) {
    this.points.unshift(point);
  },

  drop() {
    this.points = [];
  },

  isOnPoint(point) {
    return this.getCoordinates().some((barrierPoint) => {
      return barrierPoint.x === point.x && barrierPoint.y === point.y;
    });
  },
};

const status = {
  condition: null,

  setPlaying() {
    this.condition = 'playing';
  },

  setStopped() {
    this.condition = 'stopped';
  },

  setFinished() {
    this.condition = 'finished';
  },

  isPlaying() {
    return this.condition === 'playing';
  },

  isStopped() {
    return this.condition === 'stopped';
  },
};

const score = {
  count: null,
  scoreElement: null,

  init() {
    this.scoreElement = document.getElementById('score');
    this.drop();
  },

  increase() {
    this.count++;
    this.render();
  },

  drop() {
    this.count = 0;
    this.render();
  },

  render() {
    this.scoreElement.textContent = this.count;
  }
};

const game = {
  config,
  map,
  snake,
  food,
  status,
  score,
  barrier,
  tickInterval: null,

  init(userSettings = {}) {
    this.config.init(userSettings);
    const validation = this.config.validate();

    if (!validation.isValid) {
      for (const err of validation.errors) {
        console.error(err);
      }
      return;
    }

    this.map.init(this.config.getRowsCount(), this.config.getColsCount());
    this.score.init();
    this.initEventHandlers();
    this.reset();
  },

  reset() {
    this.stop();
    this.score.drop();
    this.snake.init(this.getStartSnakeBody(), 'up', this.config.getColsCount() - 1, this.config.getRowsCount() - 1);
    this.food.setCoordinates(this.getRandomFreeCoordinates());
    this.barrier.drop();
    this.render();
  },

  getStartSnakeBody() {
    return [
      {
        x: Math.floor(this.config.getColsCount() / 2),
        y: Math.floor(this.config.getRowsCount() / 2),
      }
    ];
  },

  getRandomFreeCoordinates() {
    const exclude = [this.food.getCoordinates(), ...this.snake.getBody(), ...this.barrier.getCoordinates()];

    while (true) {
      const rndPoint = {
        x: Math.floor(Math.random() * this.config.getColsCount()),
        y: Math.floor(Math.random() * this.config.getRowsCount()),
      };

      if (!exclude.some((exPoint) => rndPoint.x === exPoint.x && rndPoint.y === exPoint.y)) return rndPoint;
    }
  },

  play() {
    this.status.setPlaying();
    this.tickInterval = setInterval(() => this.tickHandler(), 1000 / this.config.getSpeed());
    this.setPlayButton('Стоп');
  },

  stop() {
    this.status.setStopped();
    clearInterval(this.tickInterval);
    this.setPlayButton('Старт');
  },

  finish() {
    this.status.setFinished();
    clearInterval(this.tickInterval);
    this.setPlayButton('Игра закончена', true);
  },

  setPlayButton(text, isDisabled = false) {
    const playButton = document.getElementById('playButton');
    playButton.textContent = text;

    isDisabled
      ? playButton.classList.add('disabled')
      : playButton.classList.remove('disabled');
  },

  tickHandler() {
    if (!this.canMakeStep()) return this.finish();
    if (this.isOnFood()) {
      this.snake.growUp();
      this.score.increase();
      this.food.setCoordinates(this.getRandomFreeCoordinates());
      this.makeBarrier();
      if (this.isGameWon()) this.finish();

    }

    this.snake.makeStep();
    this.render();
  },

  makeBarrier() {
    if (this.score.count % 2 == 0) this.barrier.setCoordinates(this.getRandomFreeCoordinates());
  },

  isOnFood() {
    return this.food.isOnPoint(this.snake.getNextStepHeadPoint());
  },

  canMakeStep() {
    const nextHeadPoint = this.snake.getNextStepHeadPoint();
    return !this.snake.isOnPoint(nextHeadPoint)
      && !this.barrier.isOnPoint(nextHeadPoint);
  },

  isGameWon() {
    return this.snake.getBody().length > this.config.getWinFoodCount();
  },

  initEventHandlers() {
    document.getElementById('playButton').addEventListener('click', () => {
      this.playClickHandler();
    });
    document.getElementById('newGameButton').addEventListener('click', () => {
      this.newGameClickHandler();
    });
    document.addEventListener('keydown', (event) => {
      this.keyDownHandler(event);
    })
  },

  playClickHandler() {
    if (this.status.isPlaying()) this.stop();
    else if (this.status.isStopped()) this.play();
  },

  newGameClickHandler() {
    this.reset();
  },

  keyDownHandler(event) {
    if (!this.status.isPlaying()) return;

    const direction = this.getDirectionByCode(event.code);

    if (this.canSetDirection(direction)) this.snake.setDirection(direction);
  },

  getDirectionByCode(code) {
    switch (code) {
      case 'KeyW':
      case 'ArrowUp':
        return 'up';
      case 'KeyD':
      case 'ArrowRight':
        return 'right';
      case 'KeyS':
      case 'ArrowDown':
        return 'down';
      case 'KeyA':
      case 'ArrowLeft':
        return 'left';
    }
  },

  canSetDirection(direction) {
    const lastStepDirection = this.snake.getLastStepDirection();

    return direction === 'up' && lastStepDirection !== 'down' ||
      direction === 'right' && lastStepDirection !== 'left' ||
      direction === 'down' && lastStepDirection !== 'up' ||
      direction === 'left' && lastStepDirection !== 'right';
  },

  render() {
    this.map.render(this.snake.getBody(), this.food.getCoordinates(), this.barrier.getCoordinates());
  },

};

game.init({ speed: 5 });
