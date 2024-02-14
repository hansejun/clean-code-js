/**
 * 이 함수는 참일 때의 반환과 거짓일 때의 반환이 명백하게 짜여져 있는 로직이다.
 * 논리적으로는 문제가 없지만, 하나의 함수가 두 가지 역할을 하는 경우에는 문제가 발생할 수 있다.
 */
function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  } else {
    return 'Anonymous';
  }
}

function getHelloCustomer(user) {
  if (user.age < 20) {
    report(user);
  } else {
    return 'Anonymous';
  }
}

function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  }

  return 'Anonymous';
}
