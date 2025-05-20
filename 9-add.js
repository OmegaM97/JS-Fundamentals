const arg1 = process.argv[2];
const arg2 = process.argv[3];

const a = parseInt(arg1);
const b = parseInt(arg2);

if (process.argv.length <= 2) {
  console.log(NaN);
} else if (isNaN(arg1) || isNaN(arg2)) {
  console.log(NaN);
} else {
  function add(a, b) {
    return a + b;
  }

  console.log(add(a, b));
}