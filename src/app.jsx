import React, { useEffect } from 'react';
import gCss from './styles/globalCss';
import initialingTheWindow from './initialingTheWindow';
import init from './init';

function App() {
  useEffect(() => {
    initialingTheWindow();
    init();
  }, []);

  gCss();
  return (
    <canvas id="canvas" />
  );
}

export default App;
