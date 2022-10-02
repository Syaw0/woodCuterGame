import mainStore from './store/mainStore';

function actionByKey(key) {
  const keyMap = {
    ArrowRight: 'moveForward',
    ArrowLeft: 'moveBackward',
    ArrowUp: 'jump',
    KeyA: 'attack1',
    KeyS: 'attack2',
    KeyD: 'attack3',
    Digit1: 'death',
    Digit2: 'hurt',
    Digit3: 'runForward',
    Digit4: 'runBackward',
  };
  return keyMap[key];
}

const useKeyboard = () => {
  document.addEventListener('keydown', (e) => {
    const action = actionByKey(e.code);
    if (action) {
      mainStore.setState(((state) => ({
        ...state,
        actions: {
          ...state.actions,
          [action]: true,
          idle: false,
        },
      })));
    }
  });

  document.addEventListener('keyup', (e) => {
    const action = actionByKey(e.code);
    if (action) {
      mainStore.setState(((state) => ({
        ...state,
        actions: {
          ...state.actions,
          [action]: false,
          idle: true,
        },
      })));
    }
  });
};

export default useKeyboard;
