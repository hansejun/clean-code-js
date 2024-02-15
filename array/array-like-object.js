/**
 * 유사 배열 객체
 */

const arrayLikeObject = {
  0: 'one',
  1: 'two',
  2: 'three',
  length: 3,
};

const arr = Array.from(arrayLikeObject);

console.log(arr); // [ 'one', 'two', 'three' ]

console.log(Array.isArray(arrayLikeObject)); // false

console.log(Array.isArray(arr)); // true

// 가변적인 인자를 넘길 때 매개변수를 미리 선언하지 않았음에도 함수 내부에서 arguments라는 유사 배열 객체를 사용할 수 있다.

function generatePriceList() {
  // for문은 사용할 수 있지만 map은 사용할 수 없다. arguments는 유사 배열 객체이기 때문이다.
  for (let i = 0; i < arguments.length; i++) {
    console.log(Array.isArray(arguments)); // false
    console.log(arguments[i] + '원'); // 1000원 2000원 3000원
  }

  //   return arguments.map(arg => arg + '원'); // TypeError: arguments.map is not a function
}

generatePriceList(1000, 2000, 3000);
