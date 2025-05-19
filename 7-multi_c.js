const input = process.argv[2];
const number = parseInt(input);

if (isNaN(number)) {
  console.log('Missing number of occurrences');
} else {
    for(let i = 1; i <= number; i++) {
      console.log('C is fun');
    }
}

