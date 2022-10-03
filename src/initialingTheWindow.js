/* eslint-disable import/no-cycle */
import init from './init';

const initialingTheWindow = (animationFrame) => {
  const setCanvasSize = () => {
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  setCanvasSize();
  window.addEventListener('resize', () => {
    setCanvasSize();
    cancelAnimationFrame(animationFrame);
    init();
  });
};

export default initialingTheWindow;
