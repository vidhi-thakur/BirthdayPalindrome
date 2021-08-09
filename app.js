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

  if(date.day < 10){
    stringDate.day = '0' + date.day;
  } else {
    steingDate.day = date.day.toString();
  }
  
  if(date.month < 10){
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

  for(let i = 0; i<listOfDates.length; i++) {
    if(isPalindrome(listOfDates[i])) {
      flag = true;
      break;
    }
  }
  return flag;
}

const date = {
  day: 2,
  month: 2,
  year: 2020
}

console.log(checkPalindromeForAllDateFromat(date))