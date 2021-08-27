import { useState, useEffect, useCallback } from "react";

export const useStatus = ( rowsCleared ) => {
  const [ score, setScore ] = useState(0);
  const [ level, setLevel ] = useState(0);
  const [ rows, setRows ] = useState(0);
  const [ difficulty, setDifficulty ] = useState(1);

  
  

  const calculateScore = useCallback(() => {
    // This is original tetris score formula [ 40(1row) , 100 (2rows) , 300 (3rows) , 1200 (4rows)]
    const linePoints = [ 40, 100, 300, 1200 ];
    // Check if there is a score
    if(rowsCleared > 0) {
      // Set score based on number of rows cleared
      setScore(prev => prev + linePoints[rowsCleared-1] * (level + 1) * difficulty)
      setRows(prev => prev += rowsCleared);
    }
  }, [level, rowsCleared, difficulty])

  useEffect(() => {
    calculateScore();
  }, [calculateScore, rowsCleared, score])

  return [ score, setScore, rows, setRows, level, setLevel, difficulty, setDifficulty];
}