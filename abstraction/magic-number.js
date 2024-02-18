/**
 * Magic number
 */

const RANGE = {
  MIN: 1000000,
  MAX: 100000000,
};

// 위 number 값을 아래와 같이 표현할 수 있다.
const RANGE2 = {
  MIN: 1_000_000,
  MAX: 100_000_000,
};

// 아래와 같이 하드 코딩된 숫자는 따로 분리해서 상수로 관리하는 것이 좋다.
const isValidSize = (width, height) => {
  return width >= 50 && height >= 30;
};

const VALID_SIZE = {
  WIDTH: 50,
  HEIGHT: 30,
};

const isValidSize2 = (width, height) => {
  return width >= VALID_SIZE.WIDTH && height >= VALID_SIZE.HEIGHT;
};
