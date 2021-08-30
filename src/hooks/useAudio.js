import { useEffect, useState } from 'react';
import { useSound } from 'use-sound';

import game from '../music/tetris-music.ogg';
import gameFast from '../music/tetris-music-fast.ogg';
import success from  '../music/tetris-success.ogg';

export const useAudio = (level, rowsCleared, gameInProg) => {
  const [ isPlaying, setIsPlaying ] = useState(false);

  const [ playGameMusic, { stop, pause } ] = useSound( level > 5 ? gameFast : game , {
    interrupt: true,
  });
  const [ playSuccessSound ] = useSound(success, {
    onend: () => {playGameMusic();},
  });

  useEffect(() => {
    if (!isPlaying) {
      stop();
    }
    if (gameInProg) {
    if (isPlaying) {
      playGameMusic();
    } 
  }
  }, [ gameInProg, isPlaying, playGameMusic, stop ])

  useEffect(() => {
    if ( isPlaying && rowsCleared === 4 ){
      pause();
      playSuccessSound();
    }
  }, [rowsCleared, isPlaying, playSuccessSound, pause])

  const musicToggle = () => setIsPlaying(!isPlaying);

  return [ isPlaying, musicToggle ]
}