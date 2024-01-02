// using console.log 
console.log("Hello World") // it console the statement and returns undefined becuase it has no explicit return value

var foo = "bar"
console.log(foo) // you can pass variable also of any kind

// we can use placeholder also

console.log("%s!", foo)

let obj = {
    "email" : "",
    "groups" : {},
    "id" : 33,
    "isHiddenInUI": false,
    "isSiteAdmin" : false,
    "loginName": "akshay",
    "prinicipalType": 1,
    "title": "user"
}

console.log(obj)
console.log(document.body)

// Using DOM API

// to change the text content into the DOM

let heading = document.getElementById("heading")
heading.textContent = "Wassup Akshay"

// to add an html in your dom

var element = document.createElement("p")
element.textContent = "Hey Guys, I am practicing my core"
document.body.appendChild(element)
// let alertWindow = window.alert(element.textContent)
// let promptWidow = window.prompt("How old are you?")
// var deleteConfirm = window.confirm("Are you sure you want to delete this?");
// console.log(deleteConfirm)

// CANVAS

// build a canvas for holding image pixel information
var canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 100;

// select a context for the canvas
var ctx = canvas.getContext("2d")

// set properties related to the text
ctx.font = "30px Cursive";
ctx.fillText("Hello AKshay", 50, 50)
document.body.appendChild(canvas)

// Using Image

var img = new Image()
img.src = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';
img.width = 100
img.height = 100
document.body.appendChild(img)

// Using SVG

var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 50;
var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0')

text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50'
text.textContent = 'Hello world!'

svg.appendChild(text);
document.body.appendChild(svg)