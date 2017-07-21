/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

CASES:
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.

*/
function fearNotLetter(str) {

    var missing = '';

    for (i = 0; i < str.length; i++) {
    	//Check if letter are consecutive by converting to ASCII codes then check if they are more than
    	//one space appart from eachother
        if ((str.charCodeAt(i + 1) - str.charCodeAt(i)) != 1) {
            missing = str.charCodeAt(i); //hold the ASCII code for the last consecutive letter
            console.log(missing);
            break;
        }
    }
    	//Check if last consecutive character should fit between first and last letters of the string
    	
    if (missing > str.charCodeAt(0) && missing < str.charCodeAt(str.length - 1)) {
        missing = (String.fromCharCode(missing + 1)); //By adding one we get the value of the missing char
        console.log(missing);
    } 
    
    else {
        missing = undefined;
    }
    console.log(missing);
    return missing;
}

fearNotLetter('xyz');
