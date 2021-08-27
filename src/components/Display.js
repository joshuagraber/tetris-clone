import React from 'react';

import { DisplayStyled } from './styles/DisplayStyled';

const Display = ( { gameOver, text} ) => (
  <DisplayStyled gameOver={gameOver}>{text}</DisplayStyled>
)

export default Display