// Array Sum

let testArray = [1, 2, 3, 4, 5];

var sum = testArray.reduce(function (a, b) {
    console.log(a, b)
    return a + b
})
console.log(sum)

// Flatten array as a object

var array = [{
    key: 'one',
    value: 1
}, {
    key: 'two',
    value: 2
}, {
    key: 'three',
    value: 3
}];

let object = array.reduce(function (obj, current) {
    obj[current.key] = current.value
    return obj
}, {})

console.log(object)

// Map using reduce
// map() creates the new array it doesn't modify the original one

function map(list, fn) {
    return list.reduce(function (newList, item) {
        return newList.concat(fn(item))
    }, [])
}


let result = map([1, 2, 3], function (n) { return n * n })
console.log(result)

// Find Min or Max Value

var arr = [4, 2, 1, -10, 9]

let resultMin = arr.reduce(function (a, b) {
    return a < b ? a : b
}, Infinity)

let resultMax = arr.reduce(function (a, b) {
    return a > b ? a : b
}, -Infinity)

console.log("Min: " + resultMin + ", Max: " + resultMax)

// Mapping Values 
// It is often necessary to generate a new array based on the values of an existing array.
// version old 
let customArr = ["one", "two", "three", "four"]
let convertedArray = customArr.map(function (value, index, arr) {
    console.log(value)
    console.log(index)
    console.log(arr)
    return value.length
})

console.log(customArr)
console.log(convertedArray)


// ['one', 'two'].map(function (value, index, arr) {
//     console.log(this); // Object { documentation: "randomObject" }
//     return value.length;
// }, {
//     documentation: 'randomObject'
// }
// );


//  Filtering Object Arrays

// The filter() method accepts a test function, and returns a new array containing only the elements of the original array that pass the test provided 


var numbers = [5, 32, 43, 4];

var oddNums = numbers.filter(function (n) {
    return n % 2 !== 0
});
console.log(oddNums)
// shorthand 
let odd = numbers.filter(n => n % 2 !== 0)
console.log(odd)

// with array of objects

var people = [
    {
        id: 1,
        name: "Jane",
        age: 55
    },
    {
        id: 1,
        name: "Akshay",
        age: 24
    },
    {
        id: 1,
        name: "thapa",
        age: 27
    }
];

var young = people.filter(person => person.age < 35)
console.log(young)

// The .sort() method sorts the elements of an array. The default method will sort the array according to string Unicode code points. To sort an array numerically the .sort() method needs to have a compareFunction passed to it.

// Note : it will not copy the original array it changed original array. thats why it is an impure function

var array = ['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', -1, '-4'];
console.log(array)

array.sort()
console.log(array)


// Alphabetical sort

let sortedArr = ['s', 't', 'a', 'c', 'K', 'o', 'v', 'E', 'r', 'f', 'l', 'W', '2', '1'].sort((a, b) => { return a.localeCompare(b); })

let sortedMultiDtypeArr = array.sort((a, b) => { return a.toString().localeCompare(b) })
console.log(sortedArr)
console.log(sortedMultiDtypeArr)
console.log(0.5 + 0.1 === 0.6)
console.log(0.2 + 0.1 === 0.3)

// String sorting by length 
let sortByLength = ["zebras", "dogs", "elephants", "penguins"].sort((a, b) => { return b.length - a.length })
console.log(sortByLength)

// Numerical sort(ascending)
let numArray = [100, 1000, 10, 10000, 1].sort(function (a, b) {
    return a - b;
});

console.log(numArray)

// Descending

var numsArray = [100, 1000, 10, 10000, 1].sort(function (a, b) {
    return b - a;
});

console.log(numsArray)

// Sorting array by even and odd numbers

let oddEven = [10, 21, 4, 15, 7, 99, 0, 12].sort(function (a, b) {
    return (a & 1) - (b & 1) || a - b;
});

console.log(oddEven)

// Date sorting

var dates = [
    new Date(2007, 11, 10),
    new Date(2014, 2, 21),
    new Date(2009, 6, 11),
    new Date(2016, 7, 23)
]

dates.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0
})

dates.sort((a, b) => { return a - b })
console.log(dates)

// Iteration 

// with for loop 
var myArray = [1, 2, 3, 4]
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

// with while loop

var key = 0

while (key < myArray.length) {
    console.log(myArray[key]);
    key++
}

for (i in myArray) {
    console.log("Index : ", i)
}

for (i of myArray) {
    console.log("Value : ", i)
}

// Destructuring an array
const triangle = [3, 4, 5,6];
const [length, height, hypotenuse] = triangle
console.log(length, height, hypotenuse)
const [, b, , c] = [1, 2, 3, 4]
console.log(b, c)
const [d, e, ...xs] = [1, 2, 3, 4, 5, 6, 7]
console.log(d, e, xs)

// Removing duplicate elements in an array
var uniqueArray = ["a", 1, "a", 2, "1", 1].filter(function (value, index, self) {
    // console.log(value, index, self)
    console.log(self)
    console.log(self.indexOf(value), index, self.indexOf(value) === index) // indexOf() returns only firstOccurence repeatedly
});

console.log(uniqueArray) // [] because it is not returning anything

// In modern js we use set
var uniqueArray = [... new Set(["a", 1, "a", 2, "1", 1])]
console.log(uniqueArray)

// Array Comparison
// Use recursive function to compare the arrays
function compareArrays(array1, array2) {
    var i, isA1, isA2;

    // check the array is or not
    isA1 = Array.isArray(array1)
    isA2 = Array.isArray(array2)

    if (isA1 !== isA2) {
        return false
    }

    // if both not arrays
    if (!(isA1 && isA2)) {
        return array1 === array2
    }

    if (array1.length !== array2.length) { // if lengths differ then can not be the same
        return false;
    }

    for(i = 0; i < array1.length; i++){
        if(!compareArrays(array1[i], array2[i])){
            return false
        }
    }
    return true
}

console.log(compareArrays([1,"String",2,3,4], [1,2,3,4,"String"]))
console.log(compareArrays([1,2,3,4,"String"], [1,2,3,4,"String"]))

// Reversing Arrays

var arr1 = [1,2,3,4,5]
var arr2 = arr1.reverse()

// note : it will reverse and retturn same array not the copy 

console.log(arr1, arr2)

var arr = [1, 2, 3, [1, 2, 3, ['a', 'b', 'c']]];

// deep reverse 

function deepReverse(arr) {
    arr.reverse().forEach((elem)=> {
        if(Array.isArray(elem)){
            deepReverse(elem)
        }
    })
    return arr
}

console.log(arr, deepReverse(arr))

// SHALLOW CLONING AN ARRAY

var clone = arr1.slice()
console.log(clone)
// we can use Array.from(array) and Array.of(...array) methods to clone the array we can use spread operator also

// Concatenating arrays

var arrAgain1 = [1,2]
var arrayAgain2 = [3,4,5,6]

var array3 = arrAgain1.concat(arrayAgain2)
//  in modern version 
var arrayAgain3 = [...arrAgain1, ...arrayAgain2] 

// Without copying the array you can use push method

arrAgain1.push(...arrayAgain3)
console.log(...new Set(arrAgain1))


// Merge Two Array as a key value pair

var columns = ["Date", "Number", "Size", "Location", "Age"];
var rows = ["2001", "5", "Big", "Sydeny", "25"];

var mergeResult = rows.reduce(function(result, field, index){
    console.log(result, index, field)
    result[columns[index]] = field
    return result
},{})

console.log(mergeResult)