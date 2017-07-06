/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
Do not use the .endsWith() method
CASES:
confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Do not use the built-in method .endsWith() to solve the challenge.
*/
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

console.log(confirmEnding("this is an example", "mple"));
