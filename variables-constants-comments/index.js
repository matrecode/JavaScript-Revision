var myVariable = "This is a variable";
var number1 = 5;
number1 = 3;

console.log(number1)
// window.alert(number1)

// operations on variable

number1 = number1 + 5; // 8
number1 = number1 - 6; // 2

var number2 = number1 * 10 // 20
var number3 = number2 / number1 // 10
console.log(number1, number2, number3)

// string concatenation
var myString = "I am a " + "string!"
console.log(myString)

// Types of Variables

var myInteger = 12 // 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myLog = 9310141419482; // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807) 
var myFloat = 5.5 // 32-bit floating-point number (decimal)
var myDouble = 9310141419482.22; // 64-bit floating-point number
var myBoolean = true; // 1-bit true/false (0 or 1)
var myBoolean2 = false;

var myNotaNumber = NaN;
var NaN_Example = 0/0; // NaN : Division by Zero is not possible
var notDefined; // undefined : we didn't define it to anything yet
// window.alert(aRandomVariable) // undefined
var myNull = null // null

// Arrays and Objects

var myArray = []; // empty array

var favouriteFruits = ["apple", "orange", "strawberry"];
var carsParkingLot = ["Toyota", "Ferrari", "Lexus"];
var employees = ["Billy", "Bob", "Joe"];
var primeNumbers = [2,3,5,7,11,13,17,19,23,29,31];
var randomVariables = [2, "any type works", undefined, null, true, 2.51]

myArray = ["zero", "one", "two"];
// window.alert(myArray[0]);
myArray = ["John Doe", "BIlly"];

var elementNumber = 1;
// window.alert(myArray[elementNumber]);

// Objects 

myObject = {};
john = {firstName : "John", lastName : "Doe", fullName : "John Doe"};

billy = {
    firstname : "Billy",
    lastname : undefined,
    fullname : "Billy"
}

// window.alert(john.fullName)
// window.alert(billy.firstname)


// BUILT IN CONSTANTS

// null is used for representing the intentional absence of an object value and is a primitive value. Unlike undefined it is not a property of the global object

// It is equal to undefined but not identical to it
console.log(null == undefined) // true
console.log(null === undefined) // false

console.log(typeof null) // object

var a = null;
console.log(a === null);

isNaN(NaN);          // true
isNaN(1);            // false: 1 is a number
isNaN(-2e-4);        // false: -2e-4 is a number (-0.0002) in scientific notation
isNaN(Infinity);     // false: Infinity is a number
isNaN(true);         // false: converted to 1, which is a number
isNaN(false);        // false: converted to 0, which is a number
isNaN(null);         // false: converted to 0, which is a number
isNaN("");           // false: converted to 0, which is a number
isNaN(" ");          // false: converted to 0, which is a number
isNaN("45.3");       // false: string representing a number, converted to 45.3
isNaN("1.2e3");      // false: string representing a number, converted to 1.2e3
isNaN("Infinity");   // false: string representing a number, converted to Infinity
isNaN(new Date);     // false: Date object, converted to milliseconds since epoch
isNaN("10$");        // true : conversion fails, the dollar sign is not a digit
isNaN("hello");      // true : conversion fails, no digits at all
isNaN(undefined);    // true : converted to NaN
isNaN();             // true : converted to NaN (implicitly undefined)
isNaN(function(){}); // true : conversion fails
isNaN({});           // true : conversion fails
isNaN([1, 2]);       // true : converted to "1, 2", which can't be converted to a number

console.log(window.hasOwnProperty("NaN"))
console.log(1/0)


Infinity > 123192310293; // true
-Infinity < -123192310293; // true
1 / 0; // Infinity
Math.pow(123123123, 9123192391023); // Infinity
Number.MAX_VALUE * 2; // Infinity
23 / Infinity; // 0
-Infinity; // -Infinity
-Infinity === Number.NEGATIVE_INFINITY; // true
-0; // -0 , yes there is a negative 0 in the language
0 === -0; // true
1 / -0; // -Infinity
1 / 0 === 1 / -0; // false
Infinity + Infinity; // Infinity
var a = 0, b = -0;
a === b; // true
1 / a === 1 / b; // false

// Number constants

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.EPSILON)



