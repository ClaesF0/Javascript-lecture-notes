// LVL 1 process
console.log ("claes");
console.log (7+8);
//Console log the current day of the week

//var d=new Date();
//console.log(d.getDay());

/*
var d=new Date();

var d= weekday
var weekday=new Array(8);
weekday[0]="nei"
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
weekday[7]="Sunday";
console.log("Today is "+ weekday[i])
*/

var options = { weekday: 'long'};
console.log("I dag er det "+new Intl.DateTimeFormat('no-NO', options).format());

//Console log 3 multiplied by 6
console.log (3*6)

//Using the alert() method, alert your name, e.g. alert(“Marie”);
//alert("Claes!")

var pet;
/*Above we've created a variable called pet. 
We haven't given pet a value, so it is empty or undefined. 
If you console log pet it will return a value of undefined.

Giving a variable a value when you declare it 
is called initialising the variable. 

To declare a variable we use var,
a name of our choice and a value if we are initialising it.*/
var pet = "dog";
/*We've initialised the variable pet with the string value "dog". 
We can say we've assigned the value "dog" to pet, 
and now pet contains the value "dog".*/

//lecture notes
/* 


var someNumber = 10; 
console.log (typeof someNumber);

var someString ="BMW";
console.log (typeof someString);

var someBoolean = false;
console.log(typeof someBoolean);

var d = new Date();
console.log(d);

var day = d.getDay();
console.log(day)

//hesh' example
var animal =  "frog";
console.log (animal);
//Hesh example
var delivered = true;
console.log(delivered);

var fullName = "John" + "Smith";
console.log(fullName);

var nameType = typeof fullName;
console.log(nameType);

var someName = "hesham";


var firstNo =10;
var secondNo ="10";
console.log (firstNo === secondNo); // false , bc first is nr second string
console.log (firstNo == secondNo); //true , loose comparison

console.log (10 !== 9); //it is true that 10 is NOT equal to 9


// <= less than or equal
// 11<=11 true
// 10<=11 true


var myNumber = 7;
var myString ="dog";
console.log(myNumber > 8)
console.log(myNumber <= 8)
console.log(myString === "dog")
console.log(myString !== "cat")

//declare a logged in variable OK
//check if user is logged in
//if the user is logged in I will show a nice message in the console
//else if the user is not logged in i will show a message too

var isLoggedIn = true;

if(isLoggedIn === true){
    console.log('The user is logged in');
} else {
    console.log('The user is not logged in');
}

/*
var inputIsValid = false;
if (inputIsValid === false) {
    alert ("please fill in the email field")
} else {
    // do nothing...
}
*/

/*
var ageOfCar = 12; 

if (ageOfCar < 5) {
    console.log("The car is less than 5 years old")
}
else if (ageOfCar >= 5) {
    console.log("The car is 5 years old or older")
} 
else if (ageOfCar >=9) { 
    console.log("The car is 9 years old or older")}
else {
    console.log ('hurraa!')
}

var ageOfCarTwo = 12; 

if (ageOfCarTwo < 3) {
    console.log("The car is less than 5 years old")
}
else if (ageOfCarTwo < 4) {
    console.log("The car is 5 years old or older")
}  else if (ageOfCarTwo < 5) { console.log("The car is 9 years old or older")}
else {
    console.log ('hurraa!')
}

var myAge = 29;
if (myAge > 30) { console.log ('i am too old with white hair');
}
else if (myAge === 29) {
    console.log('I still have a year of fun')
}

var myAge = 33;
if (myAge > 30) { console.log ('I am too old with white hair');
}
else if (myAge === 29) {
    console.log('I still have a year of fun')
}

var color = "red";

switch (color) {
    case "red":
        console.log("The chosen color is red");
        break;
    case "blue":
        console.log("The chosen color is blue");
        break;
    default: 
        console.log("The colour is not blue, red, green...");  
}

//Lesson3 


console.log ("Lesson 3: For loop")
var d = new Date();
console.log(d);

for (var count = 1; count <=10 ; count ++) {
    console.log(count)
}

for (var count = 1; count<= 10; count++){
    console.log(count)
}

for (var count = 1; count <= 10; count++) {
    console.log (count);
}

for (var i = 0; i<= 25; i++){
    console.log(i)
}

for (var i = 5; i< 26; i++){
    console.log(i)
}

var colors = [
    "red",
    "blue",
    "green",
    "yellow"
];

var cars = [
    "BMW", //nr0
    "MG", //nr1
    "Honda", //nr2
];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

var profile = [
    {name: "Hesham"},
    {surname: "elmasry"},
    {workTitle:"teacher"},
];

var colors = [
    "red",
    "blue",
    "green",
    "yellow"
];

var firstItem = colors [0];
console.log(firstItem);

var colors = [
    "red",
    "blue",
    "green",
    "yellow"
];
var numberOfColors = colors.length; //4
for (var i = 0; i <= numberOfColors; i++){
    //i want to show some a message whent the green color comes in the array
    if(colors[i] ==="green") {//colors[2]
    console.log('I have chosen green')
}
}

//While Loop
//console.log("While loop")
//var counter = 100;
//while (counter >= 10) {
//    console.log("adding:", counter);
//    counter++
//}

var counter = 100;
while (counter >= 10) {
    console.log("subtracting:", counter);
    counter--
}



//end of lecture 3 
*/

// LECTURE 4 
console.log("Lesson 4")

//The logical AND (&&) operator
//The logical OR (||) operator

//we use && for AND logical operator 

var selectedNumber = 30; 
if (selectedNumber >= 10 && selectedNumber <= 50) {
    console.log("The selected number is within range")
}
// 30 => 10 = true
//30 <= femti = true

var selectedNumber = 5; 
if (selectedNumber >= 10 && selectedNumber <= 50) {
    console.log("The selected number is within range")
}

// OR operator 
var dayOfTheWeek = "Saturday";
if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
    console.log("It's the weekend");
}

var dayOfTheWeek = "Sunday";
if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
    console.log("It's the weekend");
}

if(true && true) {
    console.log('here')
}

if (true ||false) {
    console.log ("here 2")
}


//undefined and null

var variable;

if (variable === undefined) {
    console.log("aw man no data!");
}

/*
if (variable === null) {
    console.log("aw man still no data!");
}*/

//!== (strict not comparison)
//!= (loose not comparison)

//LCTR 5: ARRAYS = containers 
/*
var emptyArray = [string, string, string, string];
var emptyArray = [number, number, number, number];
var emptyArray = [boolean, boolean, boolean, boolean];
var emptyArray = [boolean, numer, string, mixed];
*/

//how many items in the array: 
var color = ["red", "green", "blue", "yellow"];
var numberOfItems = color.length;
console.log(color.length);


var color = ["red", "green", "blue", "yellow"];

console.log(color.push("black")); //add to the back / new item last
console.log(color); // vis i konsoll

console.log(color.pop("black")); //remove from the back / discard item
console.log(color); // vis i konsoll

console.log(color.unshift("chartreuse")); //add to the front / new item first
console.log(color); // vis i konsoll

console.log(color.shift("chartreuse")); //remove from the front / discard first item 
console.log(color); // vis i konsoll

console.log(color[0]);
/*
const myGirls = ["Cecilie" , "Lone"];
const myBoys = ["Linus" , "Billy-Børre"];
concat myBoys = 
*/

var planets = [ //0
    "earth", //0
    "mars", //1
    ["hesham", "magnus", "lisa"], //2
    ["bmw", "polo", "mg", "volvo"]//3
];
console.log(planets[0]);
console.log(planets[1]);
console.log(planets[2]);
console.log(planets[2][0]);
console.log(planets[2][1]);

//OBJECT

var mobile = {
    name : "K40 Gaming",
    color : "black",
    ram : 8, 
    storage: 512
}

console.log(mobile.color);
console.log(mobile.name);
console.log(mobile.ram);
console.log(mobile.storage);
console.warn(mobile.storage);
console.trace(mobile.storage);
console.log(mobile.storage);
/*
var postItem = {
    imageUrl: "/path/to/bee-picture",
    likeCounter: 80,
    likedByUser: true,
    filter: false,
};
*/
//alert("hva med sjokoladebolle da?")

var mobilePhones = [
    { //0
        name : "nokia n90",
        color: "blue",
        storage: 256,
    },
    {//1
        name : "nokia 3310",
        color: "blue and eggshell",
        storage: 8,
    },
    {//2
        name : "motorola razor flip",
        color: "black",
        storage: 256,
    },
    {//3
        name : "Ericsson GSM",
        color: "black",
        storage: 1,
    }
];

for (var i = 0 ; i < mobilePhones.length; i++){
    var mobileName = mobilePhones[i].name;
    console.log(mobileName[i])

    console.log(mobilePhones[i].color)
}

/* API stands for Application Programming Interface.
REST: representational state transfer */

function logWord(){
    // code that will run
};

function logWord(){
    console.log("Hello World")
};

logWord(); 

var name = "Hesham";

console.log(name);

logWord();

logWord();

logWord();

function logWord(theWord){
    console.log(theWord);
};

logWord(100);

function logTwoWords (name, age) {
    console.log("My name is " + name + " and my age is: " + age)
}

logTwoWords ("Hesh" , 30);


function someName (name){
    console.log(name)
}

someName ("Billy børre")
someName ("sture-sally")
someName ("boris")

function printLikeCounter (likeCounter) {
    return likeCounter + "likes";
};
printLikeCounter(89);
printLikeCounter(90);
printLikeCounter(91);

function getNumberOfLikes (numberOfLikes) {
    return numberOfLikes + " Likes";
}

var totalNumberOfLikes = getNumberOfLikes (40); 

console.log(totalNumberOfLikes);

/* please write a function which takes two numbers
then take the sum of these two numbers and console log it */
//pls name this function getSum
/*
function getSum (one, two) {
    var one = 1;
    var two = 2;
    console.log(one + two);
}*/

function getSum (one, two) {
    console.log(one + two);
};

getSum(1, 2)

function getMultiply (noe , noeAnnet) {
    console.log(noe * noeAnnet);
};

/*getMultiply(3 , 5);

var x = square(10);
console.log(x);
var x = square(4)*/

/*
Declare a number variable has a name someNumber
convert this someNumber variable to a string
declare another variable called someText assign the
someNumber variable to it 
console the someText variable 


var someNumber = 34;
var someText = someNumber.toString();
console.log(someString);*/

//Number(true);
//Number("10");
//Number("10   ");
//Number("10.33");
//Number("");
//Number("Hesh");

// declare a variable called someString
//var someString = "Hesham";
//assign your name to this string variable called someString
// convert this String to a Number and console log it
/*var x = number(someString);
console.log(x);*/

//someString="10";
//someString="101";
//someString="hesh 0";
//someString="hesh";
//someString=true;
//someString=false;

var fruits = ["Banana" , "Orange" , "Apple" , "Mango"];
var sortedArray = fruits.sort();
console.log(sortedArray);

const points = [40, 100, 1, 5 , 25,10];
points.sort(function(a,b){return b-a});
console.log (points);


console.log (points);

console.log("Question 1");
  // Create an empty user object.
        // Add the name property with the value Hesh.
        // Add property surname with value Peter.
        // Change name to Sokki.
        // Remove the name property from the object.


     
        console.log("Question 2");
        // Create an isEmpty(obj) function that returns true if the
        // object has no properties and false if there is
        // at least one property.

        function isEmpty(obj) {
            for (var key in obj) {
                return false;
            }
            return true;
        }

        /*
        console.log("Question 3");
        // Given an array of numbers: [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90].
        // 1) Find the maximum and minimum value of the array.
        var arr = [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90];

        console.log(arr);

        function compareNumeric(a, b) {
            return a - b
        };

        var tempArr = arr.sort(compareNumeric);
        var minValue = tempArr[0];
        var maxValue = tempArr[tempArr.length - 1];

        document.write("Min value: " + minValue + '<br/>' + "Max value: " + maxValue + '<br/>');


        // why array sort doesn't sort correctly

        // https://stackoverflow.com/questions/7000851/array-sort-doesnt-sort-numbers-correctly

*/
        var arr = [1,2,31,24,-67,5,3,555,79,-4,21,33,89,-90];

        console.log('before sorting: ', arr);

        function compareNumeric(a,b){
            return a - b;
        }

        var tempArr = arr.sort(compareNumeric);
        console.log('my new array: ', tempArr);

        var minValue = tempArr[0];
        console.log(minValue)

        var maxValue = tempArr[tempArr.length - 1]; //last item in the array
        console.log(maxValue);

        //document.write
        console.log(
            "My max value is " + maxValue +" and my min value is " + minValue);




var someObject = { //empty object 
};

var someObject = {
    name: "hesham" // object with one property
}

function isEmpty(obj) {
    for (var key in obj) {
        return false;    
    }
    return true
    }

    console.log(isEmpty(someObject));
















