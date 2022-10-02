/* eslint-disable import/no-cycle */
import initialingTheWindow from './initialingTheWindow';
import Background from './entities/backGround';
import Tiles from './entities/tiles';
import Player from './entities/player';
import useKeyboard from './useKeyboard';
import mainStore from './store/mainStore';

const init = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let animationFrame;
  useKeyboard();
  initialingTheWindow(animationFrame);
  const backGround = new Background(ctx, canvas.width, canvas.height);
  const tiles = new Tiles(ctx, canvas.width, canvas.height);
  const player = new Player(ctx, tiles.cHeight - tiles.sHeight);

  //   window.addEventListener('keydown', (e) => {
  //     if (e.key === 'a') {
  //       player.changePlayerState('walk');
  //     }
  //   });

  // write hook that return  an animation frame variable and when
  // resize happen cancel that and then init again the game

  const playerState = () => {
    const { actions } = mainStore.getState();

    const action = Object.keys(actions).filter((k) => actions[k]);
    if (action.length > 1) {
      player.changePlayerState('idle');
    } else {
      player.changePlayerState(action[0]);
    }
  };

  const updateGame = () => {
    backGround.draw();
    tiles.draw();
    player.draw();
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
