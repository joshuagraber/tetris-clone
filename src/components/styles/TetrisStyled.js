import styled from 'styled-components';

import bgImg from '../../img/bg.png';

export const WrapperStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImg}) purple;
  background-blend-mode: multiply;
  background-size: cover;
  background-repeat: repeat-x;
  overflow: auto;
`

export const TetrisStyled = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 3.5rem;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 1.25rem;
  }
`