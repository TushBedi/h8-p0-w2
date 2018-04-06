// Logic Challenge - Reverse Words

function reverseWord(word) {

var newString = '';
  for(var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  } return newString;
}

console.log(reverseWord('Hello World and Coders'));
console.log(reverseWord('John Doe'));
console.log(reverseWord('Coding is my hobby'));
console.log(reverseWord('Super'));
