/**
 * Callback function
 */

// console을 실행시키는 제어권을 addEventListener에게 넘겨준다.
someElement.addEventListener('click', function () {
  console.log('click');
  // do something
});

DOM.prototype.addEventListener = function (type, callback) {
  // ...
  if (type === 'click') {
    const clickEventObject = {
      // ...
      target: {},
    };
    callback(clickEventObject);
  }
};

/**
 * 서로 다른 함수를 콜백함수를 통해 하나로 합친다.
 */
function register() {
  const isConfirm = confirm('회원가입 성공');

  if (isConfirm) {
    redirectUserPage();
  }
}

function login() {
  const isConfirm = confirm('로그인 성공');

  if (isConfirm) {
    redirectMainPage();
  }
}

function confirmUser(message, callback) {
  const isConfirm = confirm(message);
  callback(isConfirm);
}
