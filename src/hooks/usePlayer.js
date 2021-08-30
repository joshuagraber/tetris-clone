import { useCallback, useState } from 'react';
import { checkCollision, stageWidth } from '../game-helpers';

import { tetrominos, randomTetro } from '../tetros';

export const usePlayer = () => {

  // initialize player in state
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetro: tetrominos[0].shape,
    collided: false,
  });

  const rotate = (matrix, dir) => {
    // Make rows into columns
    const rotatedTetro = matrix.map((_, index) => 
      matrix.map(col => col[index])
    );
    // Reverse each row to rotate matrix
    if (dir > 0) return rotatedTetro.map(row => row.reverse());
    return rotatedTetro.reverse();
  }

  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetro = rotate(clonedPlayer.tetro, dir);

    const position = clonedPlayer.pos.x;
    let offset = 1;

    while(checkCollision(clonedPlayer, stage, { x: 0, y: 0})) {
      clonedPlayer.pos.x += offset;
      offset = -(offset > 0 ? 1 : -1);
      if(offset > clonedPlayer.tetro[0].length){
        rotate(clonedPlayer.tetro, -dir);
        clonedPlayer.pos.x = position;
        return;
      }
    }
    setPlayer(clonedPlayer);
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: stageWidth / 2 - 2, y: 0 },
      tetro: randomTetro().shape,
      collided: false,
    })
  }, [])
  
  const updatePlayerPos = useCallback(({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
      collided,
    }))
  }, [])

  return [player, resetPlayer, updatePlayerPos, playerRotate];
}