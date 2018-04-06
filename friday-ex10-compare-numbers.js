//Logic Challenge - Compare Numbers

function compareNumbers(num1, num2) {
  if(num1>num2) {
    return false;
  } else if (num1<num2) {
    return true;
  } else if (num1 == num2) {
    return -1;
  }
}

console.log(compareNumbers(5,8));
console.log(compareNumbers(5,3));
console.log(compareNumbers(4,4));
console.log(compareNumbers(3,3));
console.log(compareNumbers(17,2));
