/**
 * 매개 변수의 순서가 경계다.
 *
 * 호출하는 함수의 네이밍과 인자 순서의 연관성을 고려한다.
 *
 * 1. 매개변수를 2개가 넘지 않도록 만든다.
 * 2. 규칙적인 매개변수가 들어온다면 arguments, rest parameter를 고려한다.
 * 3. 랩핑하는 함수
 * 4. 매개변수를 객체로 만들어서 넘긴다.
 */

function someFunc(someArg1, someArg2, someArg3, someArg4) {
  // ...
}

// 래핑하는 함수
function getFunc(someArg1, someArg2) {
  return someFunc(someArg1, someArg2, 10, 20);
}
