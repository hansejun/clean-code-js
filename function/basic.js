/**
 * 함수, 메서드, 생성자
 * ㄴ this가 가리키는 대상이 다르다.
 */

// 함수
function func() {
  return this;
}

// 생성자 함수(Class)
function Func() {
  return this;
}

class Func {
  constructor() {}
}

// 객체의 메서드
const obj = {
  method() {
    return this;
  },
};

/**
 * 함수
 * 1급 객체
 * ㄴ 변수나 데이터 구조에 할당이 가능하다.
 * ㄴ 함수의 파라미터로 전달이 가능하다. (callback func)
 * ㄴ 함수의 반환값으로 사용이 가능하다. (고차함수)
 */

func(); // window, global

// 메서드 -> 객체에 의존성이 있는 함수
obj.method(); // obj

// 생성자 함수 => 인스턴스를 생성하는 역할 Class
const instance = new Func(); // func{} (instance)
