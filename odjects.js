//expanded object functionality in E6

const my_class = {
    stream: "green",
    population: 25,
    grade: "senior",
    school: "jalaram"
}

//accessing values within js objects

my_stream = my_class.stream; //use dot notation to access object
console.log(my_stream);

//add new property to using dot notation
my_class.getPopulation = function() {
    return my_class.population;
};
console.log(my_class);

console.log(`the of student at ${my_class.school} in form II ${my_class.stream} is ${my_class.getPopulation()}`);


//shorthand property name in js objects

let name = "boonie",
    friend = "john";

const person = {
    name: name,
    friend: friend,
    help_name: function() {
        console.log(this)
        return `value of property name is ${this.name}`;

    },
    help_friend: function() {
        return `value of property name is ${this.friend}`;
    }
}
let new_friend = name_friend("john", "bonnie");
comsole.log(new_friend);
console.log(new_friends.help_friend());
console.log(new_friends.john);



//complementary dna kata
function dnaStrand(dna) {
    return dna.split('').map(function(v) {
        return {
            A: 'T',
            T: 'A',
            C: 'G',
            G: 'C'
        }
    }).
    join('');
}