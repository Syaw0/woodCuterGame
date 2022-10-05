/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Flex from './styles/styledComponents/flex';
import Text from './styles/styledComponents/text';
import woodCutter from './assets/player/woodCutter/woodcutter.png';
import steamMan from './assets/player/steamMan/steamMan.png';
import Button from './styles/styledComponents/button';
import mainStore from './store/mainStore';

function ChooseCharacter() {
  const [activeCh, setActiveCh] = useState('woodcutter');
  return (
    <Flex
      justify="center"
      dir="column"
      align="center"
      css={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        backgroundColor: '$bg',
        padding: '$2',
        borderRadius: '10px',
        width: 'fit-content',

      }}
    >
      <Text css={{
        headline5: '500',
      }}
      >
        choose your character and press Start
      </Text>

      <Flex
        align="center"
        justify="center"
        css={{
          [`#${activeCh}`]: {
            border: '2px solid red',
          },
          margin: '$2 0',
          '& p': {
            textAlign: 'center',
            margin: '$1',
          },
        }}
      >
        <Flex justify="center" dir="column">
          <img id="woodcutter" onClick={() => { setActiveCh('woodcutter'); }} src={woodCutter} alt="" />
          <Text>woodCutter</Text>
        </Flex>
        <Flex dir="column">
          <img id="steamMan" onClick={() => { setActiveCh('steamMan'); }} src={steamMan} alt="" />
          <Text>steamMan</Text>
        </Flex>

      </Flex>

      <Button
        onClick={() => { mainStore.setState({ gameStatus: 'null', character: activeCh }); }}
        type="primary"
        css={{
          padding: '$1',
        }}
      >
        Start Game
      </Button>

    </Flex>
  );
}

export default ChooseCharacter;
