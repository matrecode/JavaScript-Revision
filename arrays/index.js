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

let object = array.reduce(function(obj, current){
    obj[current.key] = current.value
    return obj
},{})

console.log(object)

// Map using reduce
// map() creates the new array it doesn't modify the original one

function map(list, fn){
    return list.reduce(function(newList, item){
        return newList.concat(fn(item))
    }, [])
}


let result = map([1,2,3], function(n){return n*n})
console.log(result)

// Find Min or Max Value

var arr = [4,2,1,-10,9]

let resultMin = arr.reduce(function(a,b){
    return a < b ? a : b
}, Infinity)

let resultMax = arr.reduce(function(a,b){
    return a > b ? a : b
}, -Infinity)

console.log("Min: " +resultMin + ", Max: " + resultMax)
