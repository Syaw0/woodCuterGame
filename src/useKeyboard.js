import mainStore from './store/mainStore';

function actionByKey(key) {
  const keyMap = {
    ArrowRight: 'moveForward',
    ArrowLeft: 'moveBackward',
    ArrowUp: 'jump',
    KeyA: 'attack1',
    KeyS: 'attack2',
    KeyD: 'attack3',
    ShiftLeft: 'sprite',
    Digit1: 'death',
    Digit2: 'hurt',
    Digit3: 'runForward',
    Digit4: 'runBackward',
  };
  return keyMap[key];
}

const useKeyboard = () => {
  document.addEventListener('keydown', (e) => {
    let action = actionByKey(e.code);
    let fixMoveIssue = {};

    if (action && action !== 'sprite') {
      if ((action === 'moveForward' || action === 'moveBackward') && e.shiftKey) {
        action = action === 'moveForward' ? 'runForward' : 'runBackward';
        fixMoveIssue = {
          moveForward: false,
          moveBackward: false,
        };
      }
      mainStore.setState(((state) => ({
        ...state,
        actions: {
          ...state.actions,
          [action]: true,
          idle: false,
          ...fixMoveIssue,
        },
      })));
    }
  });

  document.addEventListener('keyup', (e) => {
    const { actions } = mainStore.getState();
    let action = actionByKey(e.code);
    let fixMoveIssue = {};

    if (action) {
      if (e.code === 'ShiftLeft' || e.shiftKey) {
        action = 'idle';
        const result = Object.keys(actions).filter((k) => actions[k])[0];
        if (result === 'runForward' || result === 'runBackward') {
          const enableMove = result === 'runBackward' ? 'moveBackward' : 'moveForward';
          fixMoveIssue = {
            [enableMove]: true,
            [result]: false,
            idle: false,
          };
        }
      }

      mainStore.setState(((state) => ({
        ...state,
        actions: {
          ...state.actions,
          [action]: false,
          idle: true,
          ...fixMoveIssue,
        },
      })));
    }
  });
};

export default useKeyboard;
