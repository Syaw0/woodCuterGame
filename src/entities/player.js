/* eslint-disable no-unused-expressions */
import {
  playerIdleImage,
  playerJumpImage,
  playerWalkImage,
  playerAttack1Image,
  playerAttack2Image,
  playerAttack3Image,
  playerHurtImage,
  playerRunImage,
  playerDeathImage,

} from '../assets/images';

const playerImgMap = {
  idle: playerIdleImage,
  jump: playerJumpImage,
  moveForward: playerWalkImage,
  moveBackward: playerWalkImage,
  attack1: playerAttack1Image,
  attack2: playerAttack3Image,
  attack3: playerAttack2Image,
  death: playerDeathImage,
  hurt: playerHurtImage,
  runForward: playerRunImage,
  runBackward: playerRunImage,
};

class Player {
  constructor(ctx, sHeight) {
    this.ctx = ctx;
    this.x = 500;
    this.size = 70;
    this.sHeight = sHeight;
    this.sRHeight = sHeight;
    this.playerState = 'idle';
    this.dir = true;
    this.maxTimeOut = 0;
    this.speed = 12;
    this.image = {
      src: playerIdleImage,
      current: 0,
      length: playerIdleImage.width / this.size,
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
      -20,
      0,
      //   this.x,
      //   this.sHeight - this.size,
      this.size,
      this.size,

    );
    this.ctx.restore();
    this.update();
  }

  update() {
    if (this.image.name === 'moveForward') {
      this.dir = true;
      this.x += 0.5;
    }
    if (this.image.name === 'moveBackward') {
      this.dir = false;
      this.x -= 0.5;
    }
    if (this.image.name === 'jump') {
      this.dir ? this.x += 1 : this.x -= 1;
    }
    if (this.image.name === 'runForward') {
      this.dir = true;
      this.x += 1.4;
    }
    if (this.image.name === 'runBackward') {
      this.dir = false;
      this.x -= 1.4;
    }

    if (this.image.name === 'attack2') {
      this.dir ? this.x += 0.6 : this.x -= 0.6;
    }

    if (this.maxTimeOut >= 100) {
      // console.log(mainStore.getState().actions)
      if (this.image.current === 3) {
        this.image.current = 0;
      } else {
        this.image.current += 1;
      }
      this.maxTimeOut = 0;
    } else {
      this.maxTimeOut += this.speed;
    }
  }

  changePlayerState(newState) {
    if (playerImgMap[newState] === this.image.src) {
      return;
    }

    this.playerState = newState;
    this.image = {
      src: playerImgMap[newState],
      length: playerImgMap[newState].width / this.size,
      current: 0,
      name: newState,
    };
  }
}

export default Player;
