//Sum and average of five two digit random number
function digitNumber() 
{
    return Math.floor(10 + Math.random() * 90);
}

let num = 0;
let count = 0;
let sum = 0;

while (count < 5) 
{
    count++;
    num = digitNumber();
    sum += num;
}
let avg = sum / count;
console.log("sum :" + sum);
console.log("avg : " + avg);
