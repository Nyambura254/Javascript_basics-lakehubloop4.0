//1.declare a function named "isPalindrome" and pass it "str" as a parameter
//2.declare and initialize a variable, "reversed" as an empty string
//3.loop from the first char of "str" to the last
//4.append the content of the "reversed" variable to each char
//5.end loop
//6.return to boolean expression "reversed===str"
//7.end function
function isPalindrome(str) {
    var reversed = "";
    for (var char of str) {
        reversed = char + reversed;
    };
    return reversed === str; //boolean expression
}
console.log(isPalindrome("dad"));