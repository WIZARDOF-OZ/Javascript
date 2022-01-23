// Store Multiple Values With Arrays

var myArray = ["Wizard", 1]
console.log(myArray)


// Nested Arrays
var MyArray = [["Bull",45], ['White Fox',45]]
console.log(MyArray)

// Access Array Data with Indexes

var myArray2 = [50,60,70];
var myData = myArray2[0];
console.log(myData)

// Modify Array Data with Indexes

var myArray3 = [18,65,99];
myArray3[0] = 45; // Our output will be the [45, 65, 99]
console.log(myArray3) 

// Access Multi-Dimensional Arrays With Indexes

var mynumberArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]]
var Data = mynumberArray[3][0][1]
console.log(Data)

// Manipulae Arrays with push()

var Arraying = [["John", 23],["cat", 2]];
Arraying.push(["dog",3],"hola") // here ["dog",3] and "hola" is added to end of the array [["John", 23],["cat", 2]] is eqaul to [ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ], 'hola' ]
console.log(Arraying)

// Manipulae Arrays with pop()
var ourArray = [1,2,3,["cat",2]]
ourArray.pop(); // here ["cat", 2] is removed and it is now [1,2,3]
console.log(ourArray)

// Manipulae Arrays with shift()

var ourShift = ["Ben10","Pokemon","Naruto"]
ourShift.shift() // here Ben10 got removed and now it is ["Pokemon","Naruto"]
console.log(ourShift)

// Manipulae Arrays with unshift()

var myUnshift = ["Goro","ZeroTwo","Sasuke","Itachi"]
myUnshift.shift() // here "Goro" will get removed and it will be ["ZeroTwo","Sasuke","Itachi"]
myUnshift.unshift("Hiro") // Here "Hiro" will add to the beginning of the array and it will now ["Hiro","ZeroTwo","Sasuke","Itachi"]
console.log(myUnshift)