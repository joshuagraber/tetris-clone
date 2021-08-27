import React from 'react';

import { DifficultyStyled } from './styles/DifficultyStyled';
import { difficultyLevels } from '../game-helpers';

const Difficulty = ( {difficulty, setDifficulty} ) => {
  const handleSetDifficulty = (e) => {
    setDifficulty(parseFloat(e.target.value) / 10);
  }

  return (
  <DifficultyStyled difficulty={difficulty}>
      <h4>Difficulty</h4>
      <input type="range" min="5" max="25" defaultValue="10" step="5" className="slider" onChange={handleSetDifficulty}/>
      <div className="difficulty-display">{difficultyLevels.map(i => i.value === difficulty ? `${i.difficulty}` : '' )}</div>
  </DifficultyStyled>
)}

export default Difficulty