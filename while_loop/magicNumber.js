readline = require("readline-sync")
let number = readline.question("enter the number ")

let lowerLimit = 1;
let upperLimit = 100;


function magic_Num(number)
{
    if ( number >= 1 && number <= 100)
    {
       while (number > 0)
       { 
	    let mid = (lowerLimit + (upperLimit - lowerLimit) / 2 ); 
        if (number < mid)
        {
            upperLimit = ( mid - 1 );
        }
        else if (number > mid)
        {  
            lowerLimit = ( mid + 1 );
        }
        else
        { 
	        console.log("The number you guessed is "+number);
            break;
        }
    }
}
else 
console.log("The number is out of range.");
}

magic_Num(number);