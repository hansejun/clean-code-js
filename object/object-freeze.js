/**
 * Object.freeze()
 *
 * 1. lodash의 deepFreeze를 사용하거나 직접 구현해서 사용해야 한다.
 * 2. ts 환경에서는 Readonly를 사용하면 된다.
 */

const STATUS = Object.freeze({
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
});

STATUS.PENDING = '23232';
console.log(STATUS.PENDING); // PENDING

STATUS.INIT = 'INIT';
console.log(STATUS.INIT); // undefined

// 객체 동결이 되어있는지 확인
Object.isFrozen(STATUS); // true
Object.isFrozen(STATUS.FULFILLED); // true

/**
 * deep freeze는 되지 않는다. 라이브러리 혹은 직접 구현해서 사용해야 한다.
 */
const STATUS2 = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
  OPTIONS: {
    GREEN: 'GREEN',
    RED: 'RED',
  },
};

Object.isFrozen(STATUS2.OPTIONS); // false

STATUS2.OPTIONS.GREEN = 'BLUE';
console.log(STATUS2.OPTIONS.GREEN); // BLUE

delete STATUS2.OPTIONS.GREEN;
console.log(STATUS2.OPTIONS.GREEN); // undefined

function deepFreeze(obj) {
  // First, freeze the current level object

  Object.keys(obj).forEach(key => {
    if (
      typeof obj[key] === 'object' &&
      obj[key] !== null &&
      !Object.isFrozen(obj[key])
    ) {
      deepFreeze(obj[key]);
    }
  });

  return Object.freeze(obj);
}

deepFreeze(STATUS2);

STATUS2.OPTIONS.GREEN = 'BLUE';
console.log(STATUS2.OPTIONS.GREEN); // GREEN

delete STATUS2.OPTIONS.GREEN;
console.log(STATUS2.OPTIONS.GREEN); // GREEN
