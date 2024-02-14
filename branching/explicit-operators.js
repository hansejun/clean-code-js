// ()를 사용하여 연산자의 우선순위를 명시적으로 표현
if ((isLogin && token) || user) {
  // do something
}

// 예측 가능한 연산자를 사용. 단순하게 변경하는게 좋음
function increment() {
  number--; // ❌
  --number; // ❌

  number = number - 1; // 명시적임
}
