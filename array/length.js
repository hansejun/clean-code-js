/**
 * 자바스크립트의 Array.length는 절대적으로 배열의 길이를 보장하지 않는다.
 * 마지막 인덱스를 표출해내는 것에 가깝다.
 */

const arr = [1, 2, 3];

arr.length = 10;

console.log(arr); // [ 1, 2, 3, <7 empty items> ]
console.log(arr.length); // 10

/**
 * 다른 예시
 */

const arr2 = [1, 2, 3];

arr[3] = 4;

console.log(arr.length); // 4

arr[9] = 10;

console.log(arr.length); // 10

/**
 * Array.lnegth
 *
 */

Array.prototype.clear = function () {
  this.length = 0;
};

function clearArray(array) {
  array.length = 0;
  return array;
}

const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3];

arr3.clear();

// 배열의 길이를 0으로 바꾸었을 뿐인데 배열이 초기화되었다.
console.log(arr3); // []
console.log(clearArray(arr4)); // []
