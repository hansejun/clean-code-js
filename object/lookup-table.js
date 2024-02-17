/**
 * lookup table
 * key value로 나열된 테이블
 */

function getUserType(type) {
  switch (type) {
    case 'ADMIN':
      return '관리자';
    case 'EDITOR':
      return '편집자';
    case 'USER':
      return '사용자';
    default:
      return '알 수 없음';
  }
}

// 상수를 따로 관리하여 가독성을 높일 수 있음
function getUserType(type) {
  const USER_TYPE = {
    ADMIN: '관리자',
    EDITOR: '편집자',
    USER: '사용자',
    UN: '알 수 없음',
  };
  return USER_TYPE[type] || USER_TYPE[UN];
}
