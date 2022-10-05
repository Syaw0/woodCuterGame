/* eslint-disable no-unused-expressions */
import {
  players,
} from '../assets/players';
import mainStore from '../store/mainStore';

class Player {
  constructor(ctx, sHeight) {
    this.health = 100;
    this.imgMap = players.steamMan;
    this.takeHeath = 1;
    this.live = true;
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
      src: this.imgMap.idle,
      current: 0,
      length: this.imgMap.idle.width / this.size,
      name: 'idle',
    };
  }

  draw() {
    if (this.health < 0) {
      this.changePlayerState('death');
      setTimeout(() => {
        this.live = false;
        this.image.current = this.image.length - 1;
        mainStore.setState({ gameStatus: 'choose' });
      }, 600);
    }

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

    if (this.maxTimeOut >= 100 && this.live) {
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
    if (this.playerState === 'death') {
      return;
    }
    if (this.imgMap[newState] === this.image.src) {
      return;
    }
    if (newState === 'hurt') {
      this.health -= this.takeHeath;
    }
    this.playerState = newState;
    this.image = {
      src: this.imgMap[newState],
      length: this.imgMap[newState].width / this.size,
      current: 0,
      name: newState,
    };
  }

  changeImgMap(newImgMap) {
    this.imgMap = players[newImgMap];
  }

  reHealth() {
    this.health = 100;
    this.live = true;
    this.playerState = 'idle';
    this.changePlayerState('idle');
  }
}

export default Player;
