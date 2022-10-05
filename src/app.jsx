import React, { useEffect } from 'react';
import gCss from './styles/globalCss';
import init from './init';
import mainStore from './store/mainStore';
import ChooseCharacter from './ChooseCharacter';

function App() {
  const gameStatus = mainStore((state) => state.gameStatus);
  useEffect(() => {
    init();
  }, []);
  gCss();
  return (
    <>
      <canvas id="canvas" />
      {gameStatus === 'choose' && <ChooseCharacter />}
    </>
  );
}

export default App;
