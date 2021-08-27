import React from 'react';

import Cell from './Cell';

import { StageStyled } from './styles/StageStyled';

const Stage = ( { stage } ) => (
  <StageStyled width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, index) => <Cell key={index} type={cell[0]} />))}
  </StageStyled>
)

export default Stage