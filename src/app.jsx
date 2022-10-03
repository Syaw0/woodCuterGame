import React, { useEffect } from 'react';
import gCss from './styles/globalCss';
import init from './init';

function App() {
  useEffect(() => {
    init();
  }, []);

  gCss();
  return (
    <canvas id="canvas" />
  );
}

export default App;
