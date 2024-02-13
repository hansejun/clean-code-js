// 경계 (min-max)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 상수
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

// 구현부를 보지 않아도 결과를 알 수 있다.
const rnadowNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

// 최소값, 최대값 (포함되는지 vs 포함되지 않는지)를 결정해야한다. (네이밍)
const MIN_IN_NUMBER = 1;
const MAX_IN_NUMBER = 45;

// 팀의 컨벤션을 따라야 한다.
const isAdult = age => {
  // 최소값, 최대값 (포함되는지 vs 포함되지 않는지)
  // 이상, 초과 vs 이하,미만
  if (age >= 20) {
    return true;
  }
};
