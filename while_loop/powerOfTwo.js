readline = require("readline-sync")
let NUMBER = readline.question("enter the number ");

function powerOfTwo(NUMBER)
{
    for (let index=0; index<=limit; index++)
    {
        let power = (Math.pow(NUMBER, index));
        if(power < 256 )
        {
            console.log(power)
        }
    }
}
  
   let limit = 12;
   powerOfTwo(NUMBER);