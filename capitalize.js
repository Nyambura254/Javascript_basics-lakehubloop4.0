// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function stringCapitalize(str) {
    let arr = str.toLowerCase().split("");
    let result = arr.map( //creates a function with results of calling a function for every element
        //{does not return elements without values}
        function(val) {
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        });
    return result.join("");
}
stringCapitalize("lakehUb striNg capitaliZing chaLlange")