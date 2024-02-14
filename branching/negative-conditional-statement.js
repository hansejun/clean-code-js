/**
 * 부정 조건문 지양하기
 * 1. 조건에 대해 생각을 여러번 하게 만든다.
 * 2. 프로그래밍 언어 자체로 if문이 처음부터 오고 true부터 실행시킨다.
 */

/**
 * - 부정 조건 예외
 * 1. Early Return
 * 2. Form Validation
 * 3. 보안 혹은 검사하는 로직
 */

if (!isCondition) {
  console.log('조건이 거짓일 때 실행되는 코드');
}

if (isNotCondition) {
  console.log('조건이 거짓일 때 실행되는 코드');
}

if (NaN) {
  console.log('NaN은 true로 간주됩니다.');
}

// 여러번 생각하게 만드는 조건
if (!isNaN(3)) {
  console.log('3은 NaN이 아닙니다.');
}

// 덜 헷갈리게 된다.
if (isNumber(3)) {
  console.log('3은 숫자입니다.');
}
