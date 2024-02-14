/**
 * Early return
 * 로직은 변함없지만 읽기 편한 코드로 변경
 */

function loginService(isLogin, user) {
  if (!isLogin) {
    if (checkToken()) {
      if (!user.nickname) {
        return registerUser(user);
      } else {
        refreshToken();

        return 'Welcome';
      }
    } else {
      throw new Error('Invalid token');
    }
  }
}

function loginService(isLogin, user) {
  if (isLogin) {
    return;
  }

  if (!checkToken()) {
    throw new Error('Invalid token');
  }

  if (!user.nickname) {
    return registerUser(user);
  }

  refreshToken();

  return 'Welcome';
}
