/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
CASES:
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
*/
function repeatStringNumTimes(str, num) {
  if (num > 0 ){
    return str.repeat(num);
   }
   else {
    return "";
   }
}

console.log(repeatStringNumTimes("*", 3));
