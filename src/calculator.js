//old way
// module.exports = {
//   sum: function(num1, num2) {
//     return num1 + num2;
//   },
//   sub: function(num1, num2) {
//     return num1 - num2;
//   },
//   div: function(num1, num2) {
//     return
//   },
//   mult: function(num1, num2) {
//     return num1 * num2;
//   }
// }

//ES6
const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const div = (num1, num2) => (num2 == 0) ? 'Division by zero does not exist': num1 / num2;
const mult = (num1, num2) => num1 * num2;

export { sum, sub, div, mult }
