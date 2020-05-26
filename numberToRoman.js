function solution(number) {
    // convert the number to a roman numeral
    var roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

    //empty string meaning we have to put out number to be converted to roman
    var ans = '';
    //our number should start from (0)
    while (number > 0) {

        for (i in roman) { //we look our value of i in the given convertion numerals
            if (roman[i] <= number) {
                ans += i;
                number -= roman[i];
                break; //end and return the converted number to numeral
            }

        }
    }
    return ans;
}
console.log(solution(20));