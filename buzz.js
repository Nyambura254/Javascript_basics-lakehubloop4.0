//we just need to loop through each number from 1 to 100, one of the simplest FizzBuzz solution can be achieved with a for loop

function fizzBuzz(n) {
    for (var i = 1; i < n; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
};