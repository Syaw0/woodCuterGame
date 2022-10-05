/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
import { nanoid } from 'nanoid';
import initialingTheWindow from './initialingTheWindow';
import Background from './entities/backGround';
import Tiles from './entities/tiles';
import Player from './entities/player';
import useKeyboard from './useKeyboard';
import mainStore from './store/mainStore';
import Enemy from './entities/enemy';

const init = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let animationFrame;
  let enemies = [];
  useKeyboard();
  initialingTheWindow(animationFrame);
  const backGround = new Background(ctx, canvas.width, canvas.height);
  const tiles = new Tiles(ctx, canvas.width, canvas.height);
  const player = new Player(ctx, tiles.cHeight - tiles.sHeight);

  const playerState = () => {
    if (!player.live) { return; }
    const { actions } = mainStore.getState();

    const action = Object.keys(actions).filter((k) => actions[k]);
    if (action.length > 1) {
      const helperObject = {};
      Object.keys(actions).forEach((k) => {
        if (actions[k]) {
          helperObject[k] = false;
        }
      });
      mainStore.setState((state) => ({
        actions: { ...state.actions, ...helperObject, idle: true },
      }));
      player.changePlayerState('idle');
    } else {
      if (action[0].split('attack').length === 2) {
        hurtEnemy();
      }
      player.changePlayerState(action[0]);
    }
  };

  const hurtEnemy = () => {
    enemies.forEach((e) => {
      if (!e.live) {
        removeEnemyFromList(e);
        return;
      }

      if (player.image.current === 3
         && player.dir && e.x > player.x && e.x <= player.x + e.attackRange + 20) {
        e.changeEnemyState('hurt');
      } else if (player.image.current === 3
        && !player.dir && e.x < player.x && e.x >= player.x - e.attackRange - 20) {
        e.changeEnemyState('hurt');
      }
    });
  };

  const removeEnemyFromList = () => {
    setTimeout(() => {
      enemies = enemies.filter((enemy) => enemy.live);
    }, 1000);
  };

  const spawnEnemies = () => {
    enemies.forEach((e) => {
      if (!e.live) {
        removeEnemyFromList();
      }
    });
    for (let i = 0; i < 5; i += 1) {
      if (enemies.length !== 1) {
        enemies.push(new Enemy(ctx, tiles.cHeight - tiles.sHeight, canvas.width, nanoid()));
      }
    }

    let res;
    enemies.forEach((e) => {
      e.checkDistanceAndMakeDecision(player.x, player.live);
      e.draw();
      if (e.enemyState === 'attack' && player.live && e.live && e.enemyState !== 'hurt' && e.enemyState !== 'death') {
        if (e.image.current === 3) {
          player.changePlayerState('hurt');
        }
        res = true;
      }
    });
    return !!res;
  };

  const updateGame = () => {
    const gameS = mainStore.getState().gameStatus;
    backGround.draw();
    tiles.draw();

    if (gameS !== 'choose') {
      if (gameS === 'null') {
        player.changeImgMap(mainStore.getState().character);
      }
      if (!player.live) {
        player.reHealth();
        enemies = [];
      }
      player.draw();
      const res = spawnEnemies();
      if (!res) {
        playerState();
      }
    }
  };

  // let lastTime = 0;
  // let timer = 1;
  // const interval = 16;

  const animated = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateGame();

    // const delta = t - lastTime;
    // lastTime = t;
    // if (timer > interval) {
    //   timer = 0;
    // } else if (delta) {
    //   timer += delta;
    // }

    animationFrame = requestAnimationFrame(animated);
  };

  animated();
};

export default init;
