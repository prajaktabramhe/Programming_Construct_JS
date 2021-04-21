var readlineSync = require('readline-sync');

// Wait for user's response.
var Year = readlineSync.question('Enter The Year ');
console.log('Year is: ' + Year + '!');

if((Year % 4 == 0) && (Year % 100 != 0) || (Year % 400 == 0))
{
    console.log(Year + "is a leap year");
}
else
{
console.log(Year + " is not a leap year");
}