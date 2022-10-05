/* eslint-disable import/prefer-default-export */
import woodCutterIdle from './player/woodCutter/playerIdle.png';
import woodCutterJump from './player/woodCutter/playerJump.png';
import woodCutterWalk from './player/woodCutter/playerWalk.png';
import woodCutterAttack1 from './player/woodCutter/playerAttack1.png';
import woodCutterAttack2 from './player/woodCutter/playerAttack2.png';
import woodCutterAttack3 from './player/woodCutter/playerAttack3.png';
import woodCutterDeath from './player/woodCutter/playerDeath.png';
import woodCutterHurt from './player/woodCutter/playerHurt.png';
import woodCutterRun from './player/woodCutter/playerRun.png';

import steamManIdle from './player/steamMan/steamManIdle.png';
import steamManJump from './player/steamMan/steamManJump.png';
import steamManWalk from './player/steamMan/steamManWalk.png';
import steamManAttack1 from './player/steamMan/steamManAttack1.png';
import steamManAttack2 from './player/steamMan/steamManAttack2.png';
import steamManAttack3 from './player/steamMan/steamManAttack3.png';
import steamManDeath from './player/steamMan/steamManDeath.png';
import steamManHurt from './player/steamMan/steamManHurt.png';
import steamManRun from './player/steamMan/steamManRun.png';

const steamManIdleImage = new Image();
steamManIdleImage.src = steamManIdle;

const steamManJumpImage = new Image();
steamManJumpImage.src = steamManJump;

const steamManWalkImage = new Image();
steamManWalkImage.src = steamManWalk;

const steamManAttack1Image = new Image();
steamManAttack1Image.src = steamManAttack1;

const steamManAttack2Image = new Image();
steamManAttack2Image.src = steamManAttack2;

const steamManAttack3Image = new Image();
steamManAttack3Image.src = steamManAttack3;

const steamManDeathImage = new Image();
steamManDeathImage.src = steamManDeath;

const steamManHurtImage = new Image();
steamManHurtImage.src = steamManHurt;

const steamManRunImage = new Image();
steamManRunImage.src = steamManRun;

const woodCutterIdleImage = new Image();
woodCutterIdleImage.src = woodCutterIdle;

const woodCutterJumpImage = new Image();
woodCutterJumpImage.src = woodCutterJump;

const woodCutterWalkImage = new Image();
woodCutterWalkImage.src = woodCutterWalk;

const woodCutterAttack1Image = new Image();
woodCutterAttack1Image.src = woodCutterAttack1;

const woodCutterAttack2Image = new Image();
woodCutterAttack2Image.src = woodCutterAttack2;

const woodCutterAttack3Image = new Image();
woodCutterAttack3Image.src = woodCutterAttack3;

const woodCutterDeathImage = new Image();
woodCutterDeathImage.src = woodCutterDeath;

const woodCutterHurtImage = new Image();
woodCutterHurtImage.src = woodCutterHurt;

const woodCutterRunImage = new Image();
woodCutterRunImage.src = woodCutterRun;

const players = {
  woodcutter: {
    idle: woodCutterIdleImage,
    jump: woodCutterJumpImage,
    moveForward: woodCutterWalkImage,
    moveBackward: woodCutterWalkImage,
    attack1: woodCutterAttack1Image,
    attack2: woodCutterAttack3Image,
    attack3: woodCutterAttack2Image,
    death: woodCutterDeathImage,
    hurt: woodCutterHurtImage,
    runForward: woodCutterRunImage,
    runBackward: woodCutterRunImage,
  },
  steamMan: {
    idle: steamManIdleImage,
    jump: steamManJumpImage,
    moveForward: steamManWalkImage,
    moveBackward: steamManWalkImage,
    attack1: steamManAttack1Image,
    attack2: steamManAttack3Image,
    attack3: steamManAttack2Image,
    death: steamManDeathImage,
    hurt: steamManHurtImage,
    runForward: steamManRunImage,
    runBackward: steamManRunImage,
  },

};

export {
  players,
};
