const x = 1;

/**
 * else if를 계속 쓰는 행위는 코드를 읽기 어렵게 만든다.
 * 이런 경우에는 switch 문을 사용하는 것이 좋다.
 */

if (x >= 0) {
  console.log('x는 0보다 크거나 같다.');
} else if (x > 0) {
  console.log('x는 0보다 크다.');
} else {
  console.log('x는 0보다 작다.');
}

// 위와 동일한 코드다.
if (x >= 0) {
  console.log('x는 0보다 크거나 같다.');
} else {
  if (x > 0) {
    console.log('x는 0보다 크다.');
  } else {
    console.log('x는 0보다 작다.');
  }
}

/**
 * 아래와 같이 명확하게 조건을 분리할 수도 있다.
 */

if (x >= 0) {
  console.log('x는 0보다 크거나 같다.');
}

if (x > 0) {
  console.log('x는 0보다 크다.');
}

if (x < 0) {
  console.log('x는 0보다 작다.');
}
