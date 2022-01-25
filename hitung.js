let date;
let year;
let month;
let day;
let result = 0;

function readDate() {
  year = 0;
  month = 0;
  day = 0;
  result = 0;
  let inputDate = document.getElementById("input-date");
  let defaultValue = inputDate.defaultValue;
  let currentValue = inputDate.value;

  if (defaultValue != currentValue) {
    // document.getElementById("show").innerHTML = currentValue;
    date = currentValue;
    for (let i = 0; i < 10; i++) {
      if (i === 0) {
        year = date[i];
      } else if (i < 4) {
        year = year + date[i];
      } else if (i === 5) {
        month = date[i];
      } else if (i < 7) {
        month = month + date[i];
      } else if (i === 8) {
        day = date[i];
      } else {
        day = day + date[i];
      }
    }
  }
  console.log(year);
  console.log(month);
  console.log(day);

  hitung();
}

function hitung() {
  let month2 = month - 1;
  month2 = parseInt(month2, 10);
  console.log(month2);
  result = parseInt(result, 10);
  console.log(result);

  for (let i = 1; i <= month2; i++) {
    if (i > 12) break;
    else if (i === 2) {
      if (isLeap(year)) result += 29;
      else result += 28;
    } else if (i <= 7) {
      if (i % 2 === 0) {
        result += 30;
      } else {
        result += 31;
      }
    } else {
      if (i % 2 === 0) {
        result += 31;
      } else {
        result += 30;
      }
    }
  }
  day = parseInt(day, 10);
  result += day;

  document.getElementById("show").innerHTML = `${result} hari`;
}

function isLeap(num) {
  if (num % 400 == 0) {
    return true;
  } else if (num % 100 == 0) {
    return false;
  } else if (num % 4 == 0) {
    return true;
  } else {
    return false;
  }
}
