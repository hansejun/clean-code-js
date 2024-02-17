/**
 * default value
 */

function createCarousel(carousel) {
  carousel = carousel || {};
  const type = carousel.type || 'default';
  const image = carousel.image || 'default.jpg';
  const time = carousel.time || 3000;
  return { type, image, time };
}

// default parameter를 사용하면 코드가 더 간결해진다.
function createCarousel2({
  type = 'default',
  image = 'default.jpg',
  time = 3000,
} = {}) {
  return { type, image, time };
}

createCarousel2(undefined); // { type: 'default', image: 'default.jpg', time: 3000 }

/**
 * 입력 값이 없을 때 error를 발생시켜야 하는 경우
 */

const required = argName => {
  throw new Error(`${argName} is required`);
};

function createCarousel3({
  type = required('type'),
  image = 'default.jpg',
  time = 3000,
} = {}) {
  return { type, image, time };
}

createCarousel3(); // Error: type is required
createCarousel3({ type: 'main' }); // { type: 'main', image: 'default.jpg', time: 3000 }
