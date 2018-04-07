// Logic Challenge - Minute Conversions

var minute;
function convertMinute(minute) {
    var time = Math.floor(minute/60) +':'+ minute%60;
    var min = minute/60;
    var second = minute%60;
      if (second < 10) {
        return Math.floor(min) +':'+('0'+ second);
      } else  if (second === false) {
        return min + ':' + 00;
      } return time;
  }


console.log(convertMinute(63));
console.log(convertMinute(124));
console.log(convertMinute(53));
console.log(convertMinute(88));
console.log(convertMinute(120));
