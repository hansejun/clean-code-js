/**
 * 에러처리
 *
 * 1. 개발자를 위한 에러처리
 * 2. 사용자를 위한 에러처리
 * 3. 사용자에게 사용을 제안
 * 4. 로깅
 */

const handleSubmit = () => {
  try {
  } catch (e) {
    // 1. 개발자를 위한 에러처리
    console.error(e);

    // 2. 사용자를 위한 에러처리
    alert('에러가 발생했습니다. 관리자에게 문의해주세요.');

    // 3. 사용자에게 사용을 제안
    navigate('/home');

    // 4. 로깅
    sentry.captureException(e);
  } finally {
    // 데이터를 위한 로그
  }
};
