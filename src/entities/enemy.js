/* eslint-disable no-unused-expressions */
import {
  enemies,

} from '../assets/enemis';

const enemyList = [
  { name: 'snake', speed: 0.4 },
  { name: 'mummy', speed: 0.7 },
];

const chooseRandomlyAnEnemy = () => {
  const randomNumber = Math.floor(Math.random() * (enemyList.length));
  return enemyList[randomNumber];
};

const chooseRandomlyAnEnemyDirection = (cWidth) => {
  const randomNumber = Math.floor(Math.random() * 2);
  const randomDis = Math.floor(Math.random() * 190);
  return randomNumber === 1 ? -randomDis : cWidth + randomDis;
};

class Enemy {
  constructor(ctx, sHeight, cWidth, id) {
    const { name, speed } = chooseRandomlyAnEnemy();
    this.enemyId = id;
    this.imgMap = enemies[name];
    this.ctx = ctx;
    this.health = 20;
    this.x = chooseRandomlyAnEnemyDirection(cWidth);
    this.size = 70;
    this.sHeight = sHeight;
    this.sRHeight = sHeight;
    this.enemyState = 'idle';
    this.dir = this.x < 0;
    this.attackRange = 10;
    this.maxTimeOut = 0;
    this.speedMove = speed;
    this.speedImgFrame = 12;
    this.live = true;
    this.attackWaitTime = 76;
    this.damage = 2;
    this.attackCount = 0.5;
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

    if (this.maxTimeOut >= 100 && this.live) {
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

  checkDistanceAndMakeDecision(pX, pL) {
    if (this.enemyState !== 'hurt' && this.enemyState !== 'death' && this.live && pL) {
      if (pX >= this.x) {
        if (pX - this.attackRange <= this.x) {
          this.controlAttack();
          return;
        }
        this.changeEnemyState('moveForward');
      } else if (pX < this.x) {
        if (pX + this.attackRange >= this.x) {
          this.controlAttack();
          return;
        }
        this.changeEnemyState('moveBackward');
      }
    } else if (this.enemyState === 'hurt' && this.live) {
      setTimeout(() => {
        this.speedImgFrame = 5;
        this.changeEnemyState('death');
        setTimeout(() => {
          this.live = false;
          this.image.current = this.image.length - 1;
        }, 1200);
      }, 2000);
    } else if (this.enemyState === 'hurt' && !this.live) {
      this.changeEnemyState('idle');
    }
  }

  controlAttack() {
    if (this.enemyState !== 'death' && this.enemyState !== 'hurt') {
      if (this.attackCount < this.attackWaitTime) {
        this.changeEnemyState('attack');
        this.speedImgFrame = 15;
        this.attackCount += 1;
      } else if (this.attackCount < this.attackWaitTime + 200) {
        this.speedImgFrame = 12;
        this.attackCount += 1;
        this.changeEnemyState('idle');
      } else {
        this.speedImgFrame = 12;
        this.attackCount = 1;
      }
    }
  }

  changeEnemyState(newState) {
    if (this.enemyState === 'death' || !this.live) { return; }
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
