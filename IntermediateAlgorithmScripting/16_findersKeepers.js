/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
CASES:
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/

function findElement(arr, func) {
  var num = 0;
  
//loop through each element of the array
for (i=0; i<arr.length; i++){
	num = arr[i];           //assign the array value to num
	if(func(num) == true){ //when the array value has a remainder of 0, stop the loop
		break
	}
	else{
		num = undefined
	}
}
 
return num;

}

console.log(findElement([1, 3, 5, 9], function(num){ return num % 2 === 0; }));
