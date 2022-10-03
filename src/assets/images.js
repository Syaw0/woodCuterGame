/* eslint-disable import/prefer-default-export */
import playerIdle from './player/playerIdle.png';
import playerJump from './player/playerJump.png';
import playerWalk from './player/playerWalk.png';

import playerAttack1 from './player/playerAttack1.png';
import playerAttack2 from './player/playerAttack2.png';
import playerAttack3 from './player/playerAttack3.png';
import playerDeath from './player/playerDeath.png';
import playerHurt from './player/playerHurt.png';
import playerRun from './player/playerRun.png';

import snakeAttack from './enemy/snake/snakeAttack.png';
import snakeDeath from './enemy/snake/snakeDeath.png';
import snakeIdle from './enemy/snake/snakeIdle.png';
import snakeHurt from './enemy/snake/snakeHurt.png';
import snakeWalk from './enemy/snake/snakeWalk.png';

import mummyAttack from './enemy/mummy/mummyAttack.png';
import mummyDeath from './enemy/mummy/mummyDeath.png';
import mummyIdle from './enemy/mummy/mummyIdle.png';
import mummyHurt from './enemy/mummy/mummyHurt.png';
import mummyWalk from './enemy/mummy/mummyWalk.png';

const playerIdleImage = new Image();
playerIdleImage.src = playerIdle;

const playerJumpImage = new Image();
playerJumpImage.src = playerJump;

const playerWalkImage = new Image();
playerWalkImage.src = playerWalk;

const playerAttack1Image = new Image();
playerAttack1Image.src = playerAttack1;

const playerAttack2Image = new Image();
playerAttack2Image.src = playerAttack2;

const playerAttack3Image = new Image();
playerAttack3Image.src = playerAttack3;

const playerDeathImage = new Image();
playerDeathImage.src = playerDeath;

const playerHurtImage = new Image();
playerHurtImage.src = playerHurt;

const playerRunImage = new Image();
playerRunImage.src = playerRun;

const snakeHurtImg = new Image();
snakeHurtImg.src = snakeHurt;

const snakeAttackImg = new Image();
snakeAttackImg.src = snakeAttack;

const snakeDeathImg = new Image();
snakeDeathImg.src = snakeDeath;

const snakeIdleImg = new Image();
snakeIdleImg.src = snakeIdle;

const snakeWalkImg = new Image();
snakeWalkImg.src = snakeWalk;

const mummyHurtImg = new Image();
mummyHurtImg.src = mummyHurt;

const mummyAttackImg = new Image();
mummyAttackImg.src = mummyAttack;

const mummyDeathImg = new Image();
mummyDeathImg.src = mummyDeath;

const mummyIdleImg = new Image();
mummyIdleImg.src = mummyIdle;

const mummyWalkImg = new Image();
mummyWalkImg.src = mummyWalk;

const enemies = {
  snake: {
    idle: snakeIdleImg,
    moveForward: snakeWalkImg,
    moveBackward: snakeWalkImg,
    attack: snakeAttackImg,
    death: snakeDeathImg,
    hurt: snakeHurtImg,
  },
  mummy: {
    idle: mummyIdleImg,
    moveForward: mummyWalkImg,
    moveBackward: mummyWalkImg,
    attack: mummyAttackImg,
    death: mummyDeathImg,
    hurt: mummyHurtImg,
  },
};

export {
  playerIdleImage,
  playerJumpImage,
  playerWalkImage,
  playerAttack1Image,
  playerAttack2Image,
  playerAttack3Image,
  playerHurtImage,
  playerRunImage,
  playerDeathImage,

  enemies,

};
