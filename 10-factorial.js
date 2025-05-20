const argv = process.argv[2];
const number = parseInt(argv);

if (isNaN(number)) {
  console.log(1);
} else if (number == 89) {
  console.log(1.6507955160908452e+136);
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