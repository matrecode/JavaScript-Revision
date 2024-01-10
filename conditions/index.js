console.log("Conditions")

// TERNARY OPERATOR
var animal = "kitty"
var result = (animal === "kitty") ? "cute" : "still nice"
console.log(result)

// With if else
var result = '';
if (animal === 'kitty') {
    result = 'cute';
} else {
    result = 'still nice';
}
console.log(result)

// you cannot use return or break in ternary 
// var animal = 'kitty';
// for (var i = 0; i < 5; ++i) {
//     (animal === 'kitty') ? break :console.log(i);
// }

// Switch statement

var value = 5;

switch(value){
    case 1:
        console.log("I will always run");
        break
    case 2: 
        console.log("I will never run")
        break
    default:
        console.log('I will run since animal does not match any other case')
}

var i = 0;
if (i < 1) {
    console.log("i is smaller than 1");
}

if (i < 1) {
    console.log("i is smaller than 1");
} else {
    console.log("i was not smaller than 1");
}

if (i < 1) {
    console.log("i is smaller than 1");
} else {
    if (i < 2) {
        console.log("i is smaller than 2");
    } else {
        console.log("none of the previous conditions was true");
    }
}

// Strategy

const animalSays = {
    dog(){
        return "woof"
    },

    cat(){
        return "meow"
    },

    default(){
        return "Hmmm"
    }
}

function makeAnimalSpeak(animal){
    let speak = animalSays[animal] || animalSays.default
    console.log(animal + " says " + speak())
}

makeAnimalSpeak("dog")

var x = 10
x == 10 && console.log("x is 10")
x == 10 || console.log("x is not 10")
