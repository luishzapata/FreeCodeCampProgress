/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

CASES:
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/

var convertToRoman = function(num) {

  //2 arrays decimal and roman form largest to smalles
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var romanized = '';


  for (var index = 0; index < decimalValue.length; index++) { 

    while (decimalValue[index] <= num) { 
      console.log('dvi'+decimalValue[index]);
      romanized += romanNumeral[index];  //push the roman numeral with the same index value as the decimals to the romanized string
      console.log('rni'+romanNumeral[index]);
      console.log('num'+num);
      num -= decimalValue[index];       //reduce the input number by the matching decimals index number
      console.log('newnum'+num);
    }
  }

  return romanized;
}

convertToRoman(9);
