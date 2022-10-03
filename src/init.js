/* eslint-disable import/no-cycle */
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
  useKeyboard();
  initialingTheWindow(animationFrame);
  const backGround = new Background(ctx, canvas.width, canvas.height);
  const tiles = new Tiles(ctx, canvas.width, canvas.height);
  const player = new Player(ctx, tiles.cHeight - tiles.sHeight);
  const enemy = new Enemy(ctx, tiles.cHeight - tiles.sHeight, canvas.width);

  const playerState = () => {
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
      player.changePlayerState(action[0]);
    }
  };

  const updateGame = () => {
    backGround.draw();
    tiles.draw();
    player.draw();
    enemy.checkDistanceAndMakeDecision(player.x);
    enemy.draw();
    playerState();
  };

  const animated = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateGame();
    animationFrame = requestAnimationFrame(animated);
  };

  animated();
};

export default init;
