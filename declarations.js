const my_collection = [4, 7, 0, 6];


//array map method
//array.map (callBack function)
//increment each array index by 2

let new_array = my_collection.map((e, i) => i + 2);
console.log(new_array);

//fucntion declaration
let array_demo = [];
console.log("original array", array_demo);

function addTwo(a, b, c) {

    array_demo.push(a);
    array_demo.push(b);
    array_demo.push(c);
    console.log("new look array following push oerations", array_demo);
    let addByTwo = array_demo.map((e, i) => e + 2);
    return addByTwo;
}
/*reference error thrown
console.log("trial logging function scope binding outside the function",addTwo);*/
console.log(addTwo(4, 9, 7));

//function expression
array_demo = [];
const ongezaMbili = function(a, b, c) {
    array_demo.push(a, b, c);
    console.log("new look array following push oerations", array_demo);
    let addByTwo = array_demo.map((e, i) => e + 2);
    return addByTwo;

};
//Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.

console.log(ongezaMbili(3, 8, 1));

//arrow function
let array_demo = [];

const zaidiYaMbili = (a, b, c) => {
    array_demo.push(a, b, c);
    console.log("new look array following push operation", array_demo);

    let addByTwo = array_demo.map((e, i) => e + 2);
    return addByTwo;
};
console.log(zaidiYaMbili(3, 8, 1));