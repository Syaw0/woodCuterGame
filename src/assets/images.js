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

};
