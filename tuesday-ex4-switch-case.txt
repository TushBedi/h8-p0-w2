var date = 12;
var month = 2;
var years = 2014;

if (date >= 1 && date <= 31) {
  date = date;
  if (years >= 1900 && years <= 2200) {
    years = years;
      if (month >= 1 && month <= 12) {
        month = month;
        
        switch (month) {
        case 1 :
         month = 'January';
        break;

        case 2 :
         month = 'January';
        break;

        case 3 :
         month = 'February';
        break;

        case 4 :
         month = 'April';
        break;

        case 5 :
         month = 'May';
        break;

        case 6 :
         month = 'June';
        break;

        case 7 :
         month = 'July';
        break;

        case 8 :
         month = 'August';
        break;

        case 9 :
         month = 'September';
        break;

        case 10 :
         month = 'October';
        break;

        case 11 :
         month = 'November';
        break;

        case 12 :
         month = 'December';
        break;

       }
    
      console.log(month + ' ' + date + ', ' + years);
   
     } else {
     console.log('invalid month');
    }
    
   } else {
    console.log('invalid year');
   }
 } else {
  console.log('invalid date');
}