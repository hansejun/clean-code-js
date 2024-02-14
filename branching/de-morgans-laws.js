/**
 * 드모르간의 법칙
 * AND 연산과 OR 연산을 이용한 연산 간의 관계로 드 모르간의 상대성이론
 * 프로그래밍에서는 부정 연산을 다룰 때 편하다.
 */

// not (A or B) === (not A) and (not B)
// ㄴ !(A || B) === !A && !B

// not (A and B) === (not A) or (not B)
// ㄴ !(A && B) === !A || !B

// 첫 번째 케이스
const isValidUser = false;
const isValidToken = true;

if (isValidUser && isValidToken) {
  console.log('You are logged in');
}

if (!(isValidUser && isValidToken)) {
  console.log('You are not logged in');
}

// not (A and B) === (not A) or (not B)
if (!(isValidUser && isValidToken)) {
  console.log('You are not logged in');
}

if (!isValidUser || !isValidToken) {
  console.log('You are not logged in');
}

// 두 번째 케이스
const isMale = true;
const isFemale = true;

if (isMale || isFemale) {
  console.log('You are a human');
}

// not (A or B) === (not A) and (not B)
if (!(isMale || isMale)) {
  console.log('You are not a human');
}

if (!isMale && !isFemale) {
  console.log('You are not a human');
}
