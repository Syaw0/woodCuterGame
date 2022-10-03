/* eslint-disable no-unused-expressions */
import {
  enemies,

} from '../assets/images';

const enemyList = ['snake', 'mummy'];

const chooseRandomlyAnEnemy = () => {
  const randomNumber = Math.floor(Math.random() * (enemyList.length));
  return enemies[enemyList[randomNumber]];
};

const chooseRandomlyAnEnemyDirection = (cWidth) => {
  const randomNumber = Math.floor(Math.random() * 2);
  return randomNumber === 1 ? -90 : cWidth + 90;
};

class Enemy {
  constructor(ctx, sHeight, cWidth) {
    this.imgMap = chooseRandomlyAnEnemy();
    this.ctx = ctx;
    this.health = 20;
    this.x = chooseRandomlyAnEnemyDirection(cWidth);
    this.size = 70;
    this.sHeight = sHeight;
    this.sRHeight = sHeight;
    this.enemyState = 'idle';
    this.dir = this.x < 0;
    this.attackRange = 30;
    this.maxTimeOut = 0;
    this.speedMove = 1;
    this.speedImgFrame = 12;
    this.image = {
      src: this.imgMap.idle,
      current: 0,
      length: this.imgMap.idle.width / this.size,
      name: 'idle',
    };
  }

  draw() {
    this.ctx.save();
    this.ctx.translate(this.x, this.sHeight - this.size);
    this.ctx.scale(this.dir ? 1 : -1, 1);
    this.ctx.drawImage(
      this.image.src,
      this.size * this.image.current,
      0,
      this.size,
      this.size,
      -42,
      0,
      this.size,
      this.size,

    );
    this.ctx.restore();
    this.update();
  }

  update() {
    if (this.image.name === 'moveForward') {
      this.dir = false;
      this.x += this.speedMove;
    }
    if (this.image.name === 'moveBackward') {
      this.dir = true;
      this.x -= this.speedMove;
    }

    if (this.maxTimeOut >= 100) {
      if (this.image.current === 3) {
        this.image.current = 0;
      } else {
        this.image.current += 1;
      }
      this.maxTimeOut = 0;
    } else {
      this.maxTimeOut += this.speedImgFrame;
    }
  }

  checkDistanceAndMakeDecision(pX) {
    if (pX >= this.x) {
      if (pX - this.attackRange <= this.x) {
        this.changeEnemyState('attack');
        return;
      }
      this.changeEnemyState('moveForward');
    } else if (pX < this.x) {
      if (pX + this.attackRange >= this.x) {
        this.changeEnemyState('attack');
        return;
      }
      this.changeEnemyState('moveBackward');
    }
  }

  changeEnemyState(newState) {
    if (newState === this.image.name) {
      return;
    }
    this.enemyState = newState;
    this.image = {
      src: this.imgMap[newState],
      length: this.imgMap[newState].width / this.size,
      current: 0,
      name: newState,
    };
  }
}

export default Enemy;
