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


