/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

CASES:
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/

function sumAll(arr){
 var total = 0;
 sorted = arr.sort(function(a, b){return a - b});
  for(var i = sorted[0]; i <= sorted[1]; i ++){
	total += i;
	console.log(i);  
  }
 return total ; 
}

console.log(sumAll([10,5]));
