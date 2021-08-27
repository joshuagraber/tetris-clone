import styled from 'styled-components';


export const DifficultyStyled = styled.div`
  width: auto;
  margin: auto 0 1.25rem 0;
  padding: 1rem;
  border: 4px solid #333;
  min-height: 30px;
  border-radius: 15px;
  color: #999;
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  input {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 30px;
    background: #333;
    padding: .1rem;
  }

  input::-webkit-slider-thumb {
  -webkit-appearance: none; 
  appearance: none;
  width: 25px;
  height: 25px; 
  background: #000; 
  cursor: pointer; 
  }

  h4 {
    padding: 1rem;
  }

  .difficulty-display {
    display: block;
    padding: 1rem;
  }
`