/**
 * Arrow function
 * ㄴ 함수 표현식보다 간결하게 함수를 정의할 수 있다.
 * ㄴ this를 바인딩하지 않는다.
 * ㄴ arguments 객체를 바인딩하지 않는다.
 * ㄴ call, apply, bind를 사용하여 this를 바인딩할 수 없다.
 * ㄴ new 연산자로 호출할 수 없다.
 */

const user = {
  name: 'John',
  getName: () => {
    return this.name;
  },
  hello() {
    return `Hello, ${this.name}`;
  },
  getFriends: (...rest) => {
    // call, apply, bind를 사용하여 this를 바인딩할 수 없다.
    return rest.map(friend => `${this.name} is friend with ${friend}`);
  },
};

// Arrow function은 this를 바인딩하지 않는다.
user.getName(); // undefined

user, hello(); // 'Hello, John'

// 생성자 함수로 사용할 수 없다.
const Person = name => {
  this.name = name;
};

const person = new Person('John'); // TypeError: Person is not a constructor
