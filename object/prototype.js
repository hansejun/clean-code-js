/**
 * Prototype 조작 지양하기
 *
 * 1. 이미 JS는 prototype을 사용하지 않고 class를 사용하는 것을 권장하고 있다.
 * ㄴ 직접 만들어서 모듈화
 * ㄴ 직접 만들어서 모듈화 -> 배포 -> npm
 * 2. JS 빌트인 객체를 건드리는건 권장되지 않는다.
 * 3.
 */

class Car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }
  sayName() {
    return `I'm ${this.name} of ${this.brand}`;
  }
}

function Car2(name, brand) {
  this.name = name;
  this.brand = brand;
  Car.prototype.sayName = function () {
    return `I'm ${this.name} of ${this.brand}`;
  };
}

/**
 * 빌트인 객체를 건드리는 것은 권장되지 않는다.
 */
String.prototype.sayHello = function () {
  return `Hello`;
};

console.log('string'.sayHello()); // 'Hello'
