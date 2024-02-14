/**
 * 기본값을 설정
 */

function sum(x, y) {
  x = x || 1;
  y = y || 1;
  return x + y;
}

sum();

// 엣지 케이스에 대한 처리를 위해 노력해야한다.
function registerDay(userInputDay) {
  switch (userInputDay) {
    case 'monday':
      console.log('Monday is a good day to start new things.');
      break;
    case 'tuesday':
      console.log('Tuesday is great day to work hard.');
      break;
    case 'wednesday':
      console.log('Wednesday is a wonderful day to succeed.');
      break;
    case 'thursday':
      console.log('Thursday is a day to be thankful for what you have.');
      break;
    case 'friday':
      console.log('Friday is a day to finish your goals for the week.');
      break;
    case 'saturday':
      console.log('Saturday is a day to relax and enjoy.');
      break;
    case 'sunday':
      console.log('Sunday is a day to plan for the week ahead.');
      break;
    default:
      console.log('Not a valid day.');
  }
}

registerDay('monday23');
