//Logic Challenge - X and O

function xo(str) {
  var countX = 0;
  var countO = 0;
   for(var i =str.length; i >= 0; i-- ){
     var store = str[i];
     if (store === 'x'){
       countX ++;
     }if(store === 'o'){
       countO ++;
     }
   }
   return countX === countO;
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));
