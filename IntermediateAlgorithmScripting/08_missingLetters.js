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
        if ((str.charCodeAt(i + 1) - str.charCodeAt(i)) != 1) {
            missing = str.charCodeAt(i);
            break;
        }

    }

    if (missing >= str.charCodeAt(0) && missing < str.charCodeAt(str.length - 1)) {
        missing = (String.fromCharCode(missing + 1));

    } else {
        missing = undefined;
    }

    return missing;
}

fearNotLetter('abce');
