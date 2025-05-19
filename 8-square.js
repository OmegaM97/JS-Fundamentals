const input = process.argv[2];
const number = parseInt(input);

if (isNaN(number)) {
  console.log('Missing size');
} else {
  let square = '';

  for (let i = 1; i <= number; i++) {
    for (let o = number; o > 0; o--) {
      square += "X";
    }
    square += "\n";
  }
  console.log(square);
}