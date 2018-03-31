var Name = '';
var Role = '';

if (Name ==='') {
  console.log('Name must be filled!');
  
} else if (Name !== '' && Role === '') {
  console.log('Hello ' + Name +', Choose your role to start the game!');
  
} else if (Name !== '' && Role === 'Knight') {
  console.log('Welcome to Proxytia World, ' + Name);
  console.log('Hello ' + Name + ' ' + Role + ', you can attack with your weapons!');
  
} else if (Name !== '' && Role === 'Doctor') {
  console.log('Welcome to Proxytia World, ' + Name);
  console.log('Hello ' + Name + ' ' + Role + ', you will help your injured friends.');
  
} else if (Name !== '' && Role === 'Wizard') {
  console.log('Welcome to Proxytia World, ' + Name);
  console.log('Hello ' + Name + ' ' + Role + ', create a miracle that helps your victory!');

  
} else {
  console.log('Sorry ' + Name + ', invalid Role. Please choose "Knight", "Wizard" or "Doctor"')
}