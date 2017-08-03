/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
CASES:
sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
*/
function sumFibs(number) {

    //variables to run the Fibonacci series
    var previous_first = 0; 
    previous_second = 1;
    next = 1;
    //array to store all values and sum for final total sum of numbers inside array
    arr = [1]; 
    sum = 0;

    //for loop to generate the Fibonacci series

    for(var i = 2; i <= number; i++) {
       
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
        
        if (next%2 !== 0 && next <= number){ // selecting only odd numbers
        	arr.push(next);
        }
               
    }
   
    sum = arr.reduce(function(a, b) { return a + b; }, 0); // sum of all items in array
    console.log(arr);
 
    return sum;
}
//Test
sumFibs(75025);
