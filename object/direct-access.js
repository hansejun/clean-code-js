/**
 * 직접 접근 지양하기
 * 예측 가능한 코드를 작성해서 동작을 예측하기 쉽게 만들어야 한다. ex) FLUX
 * 직접 접근을 지양하고, 함수나 메서드를 통해서 접근하도록 한다. getter setter
 */

// ❌ 너무 쉽게 Model에 접근한다.
const model = {
  isLogin: false,
  isValidToken: false,
};

function login() {
  model.isLogin = true;
  model.isValidToken = true;
}

function logout() {
  model.isLogin = false;
  model.isValidToken = false;
}

// ✅ 직접 접근하지 않고, 함수를 통해서 접근한다.
function setLogin(value) {
  model.isLogin = value;
}

function setIsValidToken(value) {
  model.isValidToken = value;
}

function login() {
  setLogin(true);
  setIsValidToken(true);
}

function logout() {
  setLogin(false);
  setIsValidToken(false);
}
