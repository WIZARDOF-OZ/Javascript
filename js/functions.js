// Write Reusable with Functions

// Example

function ourReusableFunction() {
    console.log('Hellow World')
}
ourReusableFunction();
// ourReusableFunction();
// ourReusableFunction(); // we can use the same functions as many we want to. 


function ImWizard(){
    console.log("Im , Wizard")
}
ImWizard();

// Passing Value to Functions with Arguments
/*Question: What is  Paramenters?
Answer: Parameters are variables that act as placeholders for the values that are
to be input to a function when it is called.
*/

function functionWithArgs(a, b){
    console.log(a + b)
}
functionWithArgs(25, 5) // here the output will 30

// Global Scope and Functions

/* Question: What is Scope?
Answer: Scope refers to the visibility of variables.

Question: What is Global Scope?
Answer: Variables which are defined outside of a function block have 
global scope. Global Scope means they can be seen everywhere in your Javascript Code.
*/

var MyGlobal = 10;

function fun1(){
     oppsGlobal = 5; // here don't use var means this will become global scope where we can use it anywhere in the program and in any functions and if we use var, let & const it will assign to that function where we have written it.
}

function fun2(){
    var output = "";
    if (typeof MyGlobal != "undefined") {
        output += "myGlobal: " + MyGlobal;
    }

    if(typeof oppsGlobal != "undefined"){
        output += "oppsGlobal: " + oppsGlobal; 
    }
    console.log(output)
}

fun1()
fun2()

// Local Scope And Functions

/*
Question: What is Local Scope?
Answer: Variables which are declared within a function as well as the function parameters
have local scope.
*/

function myLocalScope (){
    var myVar = 5; // here 5 is assign as myVar in the myLocalScope() function which means we can use this in the inside of the function but not outside cuz this is a local scope function and it show error in the outside of the function if we try to do console.log(myVar).
    console.log(myVar)
}
myLocalScope();
// console.log(myVar) // here this is show error because this is a local scope function



// Global vs Local Scope in Functions

// it is possible to have both local and global variables with the same name

// var greetmsg = "Wishing you a very Good Morning";

// function Greet(){
//     return greetmsg;
// }
// console.log(Greet())

var outerWear = "T-Shirt";

function myOutFit(){
 var outerWear = "sweater"; // if we run the code then it will show sweater instead of T-shirt. It's because this local variable outerWear took precedence over the global variable
    return outerWear;
}
console.log(myOutFit())// so, first we console.log(myOutFit()) function which is sweater which returns sweater
console.log(outerWear) // And then we console.log(outerWear) the global variable which is T-shirt

// Return a Value from a Function with Return

// Return Means Undefined Value

function minusSeven(num){
    return num - 7;
}
console.log(minusSeven(10))

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5))

function hello(hi) {
    return hi
}
console.log(hello("hey, there" + ", what about You"))

// Understanding Undefined Value Returned from a Function

var sum = 0;
function AddThree() {
   sum += 3 // here , we have don't use return which means it will show undefined
}
console.log(AddThree())

function addFive(){
  sum += 5; // if we add return here then it will add the 3 also means 3 + 5 = 8
}
console.log(addFive())

// Assignment with a Returned Value

var changed = 0
function change(num){
    return (num + 5) / 3
}
changed = console.log(change(10)) // here the return value will store in the changed variable

var processed = 0;

function processArg(num) {
    return (num + 3) / 5
}

processed = console.log(processArg(7)) // same goes here.

// Stand in-Line 1:05:52 

function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift()
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr))
console.log(nextInLine(testArr, 6))
console.log("After: " + JSON.stringify(testArr))

// Boolean Values

function welcomeToBooleans() {
    // return true;
    return false
}
console.log(welcomeToBooleans())