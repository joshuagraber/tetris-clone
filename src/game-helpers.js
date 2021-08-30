export const difficultyLevels = [
  {value: 0.5, difficulty: 'Beginner'},
  {value: 1, difficulty: 'Normal'},
  {value: 1.5, difficulty: 'Advanced'},
  {value: 2, difficulty: 'Expert'},
  {value: 2.5, difficulty: 'Master'}
]

export const stageWidth = 12;
export const stageHeight = 20;

export const createStage = () => 
  Array.from(Array(stageHeight), () => new Array(stageWidth).fill([0, 'clear'])
)

export const checkCollision = ( player, stage, { x: moveX, y: moveY } ) => {
  for (let y = 0; y < player.tetro.length; y++) {
    for (let x = 0; x < player.tetro[y].length; x++) {
      // 1. check that cell is tetromino cell
      if (player.tetro[y][x] !== 0) {
        // 2. check that movment is inside of game area height (Y)
        if (
          !stage[y + player.pos.y + moveY] || 
        // 3. check that movement is inside of game area width (X)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
        // 4. check that cell isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) { 
          return true
        }
      }
    }
  }
}