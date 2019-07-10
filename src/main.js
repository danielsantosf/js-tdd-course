<<<<<<< HEAD

const a = 3;
const b = 2;
const c = 6;

function sum() {
  return a + b + c;
}

sum();
=======
const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => (num2 === 0) ? 'Não é possível divisão por zero!' : num1 / num2;

export { sum, sub, mult, div }
>>>>>>> 36dc6e5773e01a74268108f942ee9bda631a1ed6
