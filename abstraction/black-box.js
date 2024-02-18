/**
 * Black box event listener
 * ㄴ 내부 구현이 어떻게 동작될지 예측할 수 없는 경우
 * ㄴ 추상화가 너무 과하게 되거나 명시적인 코드가 아닌 경우
 */

const button = document.querySelector('.button');

// ❌ 여기서 handleClick이 어떤 역할을 하는 함수인지 알 수 없음
button.addEventListener('click', handleClick);

// ✅ 버튼을 클릭했을 때 로그를 가져온다는걸 알 수 있다.
button.addEventListener('click', getLog);
