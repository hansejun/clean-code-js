console.log(Number.MAX_SAFE_INTEGER);

console.log(isNaN(123)); // false

console.log(isNaN(123 + '테스트')); // false

console.log(Number.isNaN(123 + '테스트')); // true

// isNaN()은 느슨한 검사를 한다.
// Number.isNaN()은 엄격한 검사를 한다.
