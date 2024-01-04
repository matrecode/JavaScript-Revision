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
       console.log(i*j)
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


    