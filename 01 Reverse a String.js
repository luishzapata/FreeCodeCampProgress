/*

Specs:
Reverse the provided string.
Results must be a sting

Test Cases:
reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG".


*/
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('This is a string'));
