import React from 'react';
import { StartButtonStyled } from './styles/StartButtonStyled';

const StartButton = ( { callback } ) => (
  <StartButtonStyled onClick={callback}>Start Game</StartButtonStyled>
)

export default StartButton