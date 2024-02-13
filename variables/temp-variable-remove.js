// ❌
function getObject() {
  const result = {};

  result.title = 'Title';
  result.description = 'Description';
  result.date = new Date();

  return result;
}

// ✅
function getElements2() {
  return {
    title: document.querySelector('.title'),
    description: document.querySelector('.description'),
    date: document.querySelector('.date'),
  };
}

// ❌
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.getHours();

  month = month >= 10 ? month : `0${month}`;
  day = day >= 10 ? day : `0${day}`;
  hour = hour >= 10 ? hour : `0${hour}`;

  return {
    month,
    day,
    hour,
  };
}

// ✅
function getDateTime2(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.getHours();

  return {
    month: month >= 10 ? month : `0${month}`,
    day: day >= 10 ? day : `0${day}`,
    hour: hour >= 10 ? hour : `0${hour}`,
  };
}
