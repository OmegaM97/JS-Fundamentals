const argv = process.argv[2];
const number = parseInt(argv);

if (isNaN(number)) {
  console.log(1);
} else {
  function factorial(number) {
    let result = 1;

    for (let i = number; i > 0; i--) {
      result *= i;
    }
    return result;
  }
    console.log(factorial(number));
}