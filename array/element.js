/**
 * 배열 요소에 접근
 */

function getFirstAndSecondElement(arr) {
  return `첫 번째 요소: ${arr[0]}, 두 번째 요소: ${arr[1]}`;
}

function getFirstAndSecondElement(arr) {
  const [firstInput, secondInput] = arr;
  return `첫 번째 요소: ${firstInput}, 두 번째 요소: ${secondInput}`;
}

function getFirstAndSecondElement([firstInput, secondInput]) {
  return `첫 번째 요소: ${firstInput}, 두 번째 요소: ${secondInput}`;
}

/**
 * 다른 예시
 */

function formatDate(targetDate) {
  const date = targetDate.toISOString().split('T')[0];
  const time = date.split('-');
  const year = time[0];
  const month = time[1];
  const day = time[2];
  return `${year}년 ${month}월 ${day}일`;
}

function formatDate(targetDate) {
  const [date] = targetDate.toISOString().split('T');
  const [year, month, day] = date.split('-');
  return `${year}년 ${month}월 ${day}일`;
}

function formatDate(targetDate) {
  const date = head(targetDate.toISOString().split('T'));
  const [year, month, day] = date.split('-');
  return `${year}년 ${month}월 ${day}일`;
}

function head(arr) {
  return arr[0] || '';
}
