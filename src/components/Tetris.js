import React, { useState } from 'react';

// Custom functions
import { createStage, checkCollision } from '../game-helpers';

//Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import Difficulty from './Difficulty';
import Sound from './Sound';

//Styled Components
import { WrapperStyled, TetrisStyled } from './styles/TetrisStyled';

//Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useInterval } from '../hooks/useInterval';
import { useStatus } from '../hooks/useStatus';
import { useAudio } from '../hooks/useAudio';


const Tetris = () => {
  const [ droptime, setDroptime ] = useState(null);
  const [ gameOver, setGameOver ] = useState(false);
  const [ gameInProg, setGameInProg ] = useState(false);

  const [ player, resetPlayer, updatePlayerPos, playerRotate ] = usePlayer();
  const [ stage, setStage, rowsCleared ] = useStage(player, resetPlayer);
  const [ score, setScore, rows, setRows, level, setLevel, difficulty, setDifficulty ] = useStatus(rowsCleared);
  const [ isPlaying, musicToggle ] = useAudio(level, rowsCleared, gameInProg);

  


  console.log('render'); 

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 } )) {
      updatePlayerPos( {x: dir, y: 0 } );
    }
  }

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    // Set droptime
    setDroptime(1000 / difficulty);
    // Reset player
    resetPlayer();
    // Reset all counters
    setScore(0);
    setRows(0);
    setLevel(0);
    // set game in progress
    setGameInProg(true);
  }

  const drop = () => {
    // Increase level when 10 rows cleared
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      // And increase speed
      setDroptime((1000 / (level + 1) + 200) / difficulty);
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })){
      updatePlayerPos( { x: 0, y: 1, collided: false } );
    } else {
      // Game Over
      if (player.pos.y < 1 ) {
        console.log('game over');
        setGameOver(true);
        setGameInProg(false);
        setDroptime(null);
      }
      updatePlayerPos( { x: 0, y: 0, collided: true});
    }
  }

  const keyup = ({ keyCode }) => {
    if(!gameOver) {
      if(keyCode === 40) {
        setDroptime((1000 / (level + 1) + 200) / difficulty);
      }
    }
  } 

  const dropPlayer = () => {
    setDroptime(null);
    drop();
  }

  const move = ( { keyCode }) => {
    if (!gameOver) {
      // check if key press is left arrow key
      if (keyCode === 37) {
      // if so, call movePlayer -1
        movePlayer(-1);
      // check if key press is right arrow key
      } else if (keyCode === 39) {
      // if so, call movePlayer +1
        movePlayer(1);
      // check if key press is down arrow key
      } else if (keyCode === 40) {
      // if so, call dropPlayer
        dropPlayer();
      // check if key press is up arrow (for rotation)
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  }

  useInterval(() => {
    drop();
  }, droptime)

  return (
    <WrapperStyled 
      role='button' 
      tabIndex='0' 
      onKeyDown={(e) => move(e)} 
      onKeyUp={keyup}>
      <TetrisStyled>      
      <Stage stage={stage}/>
      <aside>
        {gameOver ? (
          <Display gameOver={gameOver} text="Game Over!" />
        ) : (
          <div>
            <Display text={`${score}`}/>
            <Display text={`${rows}`}/>
            <Display text={`${level}`}/>
          </div>
        )}
        
          {gameInProg ? (
            ''
          ) : (
            <Difficulty difficulty={difficulty} setDifficulty={setDifficulty}/>
          )}
        <Sound isPlaying={isPlaying} musicToggle={musicToggle}/>
        <StartButton startGame={startGame}/>
      </aside>
        </TetrisStyled>
    </WrapperStyled>
  )
}


export default Tetris