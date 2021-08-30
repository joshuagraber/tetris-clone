import React from 'react';

import { SoundStyled } from './styles/SoundStyled';

const Sound = ({isPlaying, musicToggle}) => {
    
  return (
  <SoundStyled onClick={musicToggle}>
    { !isPlaying ? (
        <span><i className="fas fa-volume-off"/> Sound Off</span>
      ) : (
        <span><i className="fas fa-volume-up"/> Sound On</span>
      ) 
    } 
  </SoundStyled>
  )
}

export default Sound