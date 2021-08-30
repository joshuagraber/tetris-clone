import React from 'react';
import { StartButtonStyled } from './styles/StartButtonStyled';

const StartButton = ( { startGame } ) => (
  <StartButtonStyled onClick={startGame}>Start Game</StartButtonStyled>
)

export default StartButton