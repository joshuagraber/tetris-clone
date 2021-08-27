import styled from 'styled-components';


export const DisplayStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 1.25rem 0;
  padding: 1.25rem;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 15px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
`