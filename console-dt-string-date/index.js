console.time("response in")
// alert("Click to continue")
console.timeEnd("response in")
// alert('One more time');
console.timeEnd("response in")

var elms = document.getElementsByTagName("div")
//select all elements on the page
console.time('Loop time');
for (var i = 0; i < 50; i++) {
        for (var j = 0, length = elms.length; j < length; j++) {
                console.log(i * j)
        }
}
console.timeEnd('Loop time')

// %s Formats the value as a string
// %i or %d Formats the value as an integer
// %f Formats the value as a floating point value
// %o Formats the value as an expandable DOM element
// %O Formats the value as an expandable JavaScript object
// %c Applies CSS style rules to the output string as specified by the second parameter

var personArr = [
        {
                "personId": 123,
                "name": "Jhon",
                "city": "Melbourne",
                "phoneNo": "1234567890"
        },
        {
                "personId": 124,
                "name": "Amelia",
                "city": "Sydney",
                "phoneNo": "1234567890"
        },
        {
                "personId": 125,
                "name": "Emily",
                "city": "Perth",
                "phoneNo": "1234567890"
        },
        {
                "personId": 126,
                "name": "Abraham",
                "city": "Perth",
                "phoneNo": "1234567890"
        }
];
console.table(personArr, ['name', 'personId', "city", "phoneNo"])

// console.clear()

//     typeof operator is used to check type of data

// Finding an Object's{} class

function Sum(...arguments) {
        if (arguments.length === 1) {
                const [firstArg] = arguments
                if (firstArg instanceof Array) {
                        return Sum(...firstArg)
                }
        }
        return arguments.reduce((a, b) => a + b)
}

console.log(Sum([1, 2, 3]))

// getting object type by constructor name 


console.log(Object.prototype.toString.call("String"))
console.log(Object.prototype.toString.call(42))
console.log(Object.prototype.toString.call({}))
console.log(Object.prototype.toString.call(Object()))
console.log(Object.prototype.toString.call(function () { }))
console.log(Object.prototype.toString.call(new Date(2015, 10, 21)))
console.log(Object.prototype.toString.call(/foo/))
console.log(Object.prototype.toString.call([]))
console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(undefined))
console.log(Object.prototype.toString.call(Error()))

// Strings

let basicStr = "Hello";
basicStr = `Hello`;

// we can create the String with String() object

//conversion
let str = String(32)

// toString() can be used to convert Numbers and Booleans or Objects to String

var intString = (5232).toString()
console.log(typeof (intString))

// You can create the string using charactercode
console.log(String.fromCharCode(101, 102, 103, 104, 105, 106))

var objString = new String("Yes I am a String object")

console.log(`objeString - ${objString} but the type of object String is still ${typeof (objString)} but their value is ${typeof (objString.valueOf())}`)


// String concatenation

var foo = "Foo"
var bar = "Bar"
console.log(`String concatenation with literals - ${foo + bar}`)
console.log((`String concatenation with literals - ${foo} ${bar}`))
console.log("String concatenation with double code " + foo + " " + bar) 


// predefined method 

console.log(`string concatenation using predefined method concat ${foo.concat(bar)}`)

// reverse string

function reverseStr(str){
        // make str into arr
        // reverse it
        // join it 

        return str.split('').reverse().join('')
}

console.log(reverseStr('string'))
console.log(reverseStr("?????")) 

// you can use spread operator to convert string into array

function reverseString(str){
        return [...String(str)].reverse().join('')
}

console.log(reverseString('string'))
console.log(reverseString("?@????")) 


// Custom reverse algorithm
function reverse(string){
        // create one string to strore the reverse str
        // run loop which is start from end and finished to start
                // add the character in variable that we have created
        var reverseStr = ""

        for(var i = string.length - 1; i>=0; i--){
                reverseStr += string[i]
        }
        return reverseStr
}

console.log(reverse("Hello"))

// Comparing string lexographically

var a = "hello"
var b = "world"

console.log(b.localeCompare(a)) // we can compare string with this mthod which returns -1 if the reference string is alphabetically(lexicographically) before the compared string //1

console.log(a.localeCompare(b)) // -1

// to write localeComapre method 

function strComparision(a, b){
        if (a === b){
                return 0
        }

        if(a > b){
                return 1
        }

        return -1
}

console.log(strComparision("hello", "world")); // -1
console.log(strComparision("hello", "hello")); //  0
console.log(strComparision("world", "hello")); //  1

// Access characters at index in string

var string = "hello World"
console.log(string.charAt(1))
console.log(string[1]) // string can be treated as arrays

console.log(string.charCodeAt(8))


// Word Counter

function wordCount(val){
        var wordsMatch = val.match(/\S+/g)

        return {
                characterWithNoSpaces : val.replace(/\S+/g, '').length,
                charcters : val.length,
                words : wordsMatch ? wordsMatch.length : 0,
                lines : val.split(/\r*\n/).length 
        }
}

console.log(wordCount("This is\na multiline\nstring.").lines)

var s = "one, two, three, four, five"
console.log(s.split(", "))

var s = "some ∆≈ƒ unicode ¡™£¢¢¢";
console.log(s.charCodeAt(5)); 

// Substring with slice

var s = "01245678901234567890"
console.log(s.slice(1,4), "taking closed range")


// String Find and Replace Functions

var helloStr = "Hello, Akshay! o"
console.log(helloStr.indexOf("o"))
console.log(helloStr.indexOf("foo"))
console.log(helloStr.lastIndexOf("o"))
console.log(helloStr.length - 1)
helloStr = helloStr.replace( "Hello", "Bye" );
console.log(helloStr)
console.log(helloStr.includes("Bye"))
console.log("harr dee harr dee harr".indexOf("dee", 10))
console.log("abc".repeat(3))


