/**
 * Rest parameters
 */

// Array.from 없이 reduce를 사용할 수 없다.
// arguments는 유사배열이므로 reduce를 사용할 수 없다.
function sum() {
  return Array.from(arguments).reduce((acc, number) => acc + number, 0);
}

// Rest parameter는 배열로 받을 수 있다.
function sum2(...numbers) {
  Array.isArray(numbers); // true
  return numbers.reduce((acc, number) => acc + number, 0);
}

function sum3(a, b, ...rest) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(rest); // [3, 4, 5]
  return rest.reduce((acc, number) => acc + number, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum2(1, 2, 3, 4, 5)); // 15
console.log(sum3(1, 2, 3, 4, 5)); // 12
