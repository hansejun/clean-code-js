/**
 * hasOwnProperty
 */

const person = {
  name: 'John',
};

console.log(person.hasOwnProperty('name')); // true

// for - in에서 많이 사용된다.
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
}

/**
 * hasOwnProperty를 오버라이딩한 경우
 */

const foo = {
  hasOwnProperty: function () {
    return 'foo method';
  },
  bar: 'string',
};

// 의도치 않은 결과를 반환할 수도 있다.
foo.hasOwnProperty('bar'); // 'foo method'

// Prototype에 직접 접근해서 call 형태로 호출하여 안전하게 사용한다.
// mdn eslint에서도 이 방법을 권장한다.
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true

// 유틸로 만들어서 사용하는 방법
function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
