//lecture notes

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


var inputIsValid = false;
if (inputIsValid === false) {
    alert ("please fill in the email field")
} else {
    // do nothing...
}

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
    Counter--
}

//end of lecture 3