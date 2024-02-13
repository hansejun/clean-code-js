console.log(null + 123); // 123

console.log(undefined + 123); // NaN

// Null을 숫자로 변환하면 0이 된다. 하지만 undefined는 NaN이 된다.

console.log(undefined == null); // true

console.log(undefined === null); // false

console.log(!undefined === !null); // true

/**
 * null은 값이 없음을 명시적으로 나타내느 값이고, undefined는 값이 할당되지 않은 상태를 나타낸다.
 * null은 숫자로 표현했을 때 0에 가깝고, undefined는 NaN이다.
 * typeof undefined = 'undefined', typeof null = 'object'
 */
