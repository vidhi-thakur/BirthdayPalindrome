function reverseString(str) {
  var reverseOfString = str.split('').reverse().join('');
  return reverseOfString;
}

function isPalindrome(str) {
  var reverseStr = reverseString(str);
  return str == reverseStr
}

function convertDateToString(date) {
  var stringDate = {
    day: "",
    month: "",
    year: ""
  }

  if (date.day < 10) {
    stringDate.day = '0' + date.day;
  } else {
    stringDate.day = date.day.toString();
  }

  if (date.month < 10) {
    stringDate.month = '0' + date.month;
  } else {
    stringDate.month = date.month.toString();
  }

  stringDate.year = date.year.toString();

  return stringDate;
}

function getAllDateFormat(date) {

  var stringDate = convertDateToString(date);

  var ddmmyyyy = stringDate.day + stringDate.month + stringDate.year;
  var mmddyyyy = stringDate.month + stringDate.day + stringDate.year;
  var yyyyddmm = stringDate.year + stringDate.day + stringDate.month;
  var ddmmyy = stringDate.day + stringDate.month + stringDate.year.slice(-2);
  var mmddyy = stringDate.month + stringDate.day + stringDate.year.slice(-2);
  var yyddmm = stringDate.year.slice(-2) + stringDate.day + stringDate.month;

  return [ddmmyyyy, mmddyyyy, yyyyddmm, ddmmyy, mmddyy, yyddmm]
}

function checkPalindromeForAllDateFromat(date) {
  var listOfDates = getAllDateFormat(date);
  flag = false;

  for (let i = 0; i < listOfDates.length; i++) {
    if (isPalindrome(listOfDates[i])) {
      flag = true;
      break;
    }
  }
  return flag;
}

function leapYear(year) {
  if (year % 400 == 0) {
    return true;
  } else if (year % 100 == 0) {
    return false;
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

function nextDate(date) {
  var nextDate = {
    day: date.day + 1,
    month: date.month,
    year: date.year
  }

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // for FEB
  if (nextDate.month == 2) {
    if (leapYear(nextDate.year)) {
      if (nextDate.day > 29) {
        nextDate.day = 1;
        nextDate.month++;
      }
    } else {
      if (nextDate.day > 28) {
        nextDate.day = 1;
        nextDate.month++;
      }
    }
  }
  if (nextDate.day > daysInMonth[nextDate.month - 1]) {
    nextDate.day = 1;
    nextDate.month++;
  }
  if (nextDate.month > 12) {
    nextDate.month = 1,
      nextDate.year++;
  }

  return nextDate
}

function nextPalindromeDate(date) {
  var counter = 0;
  var datePalindromeNext = nextDate(date)

  while (1) {
    if (checkPalindromeForAllDateFromat(datePalindromeNext)) {
      break;
    }
    counter++;
    datePalindromeNext = nextDate(datePalindromeNext)
  }
  return [counter, datePalindromeNext]
}

const input = document.querySelector('#input-date');
const btn = document.querySelector('.button');
const result = document.querySelector('.result');

btn.addEventListener("click", onClickHandler)

function onClickHandler(e) {
  e.preventDefault();

  var listOfUserInput = input.value.split('-');
  date = {
    day: Number(listOfUserInput[2]),
    month: Number(listOfUserInput[1]),
    year: Number(listOfUserInput[0])
  }

  if (checkPalindromeForAllDateFromat(date)) {
    result.innerText = `YAY!!! Your birtday is a Palindrome! 🎉`
  } else {
    var [counter, datePalindromeNext] = nextPalindromeDate(date)
    result.innerText = `OOPS! Your birtday is not a Palindrome. Next palindrome date is ${datePalindromeNext.day}-${datePalindromeNext.month}-${datePalindromeNext.year} after ${counter} days.`
  }
}