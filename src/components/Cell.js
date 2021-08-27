import React from 'react';

import { CellStyled } from './styles/CellStyled';

import { tetrominos } from '../tetros';


const Cell = ( { type } ) => (
  <CellStyled type={type} color={tetrominos[type].color} />
)

export default React.memo(Cell);