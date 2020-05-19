// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



let s = 'lollipooooop';
var result = [...s].reduce((a, e) => {
    a[e] = a[e] ? a[e] + 1 : 1;
    return a
}, {});
console.log(result);


//output
/*[object Object] {
  i: 1,
  l: 3,
  o: 6,
  p: 2
}
*/