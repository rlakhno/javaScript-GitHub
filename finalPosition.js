function finalPosition(moves) {
  let position = [0, 0];

  for (const move of moves) {
    switch (move) {
      case 'north':
        position[1]++;
        break;
      case 'south':
        position[1]--;
        break;
      case 'east':
        position[0]++;
        break;
      case 'west':
        position[0]--;
        break;
    }
  }

  return position;
}

// Example usage:
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
const result = finalPosition(moves);
console.log(result); // Output: [-1, 4]
