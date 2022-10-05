/* eslint-disable import/prefer-default-export */
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
  enemies,
};
