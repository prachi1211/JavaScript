// There are 2 types of data types in javascript
// javascript is a dynamically typed language means we dont have to specify data types
//1. Primitive
// Original reference of the data is not provided. Gives you a copy of the original data
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = outsideTemp = null
let userEmail; // undefined


const id = Symbol("123") 
const anotherId = Symbol('123')

const bigNumber = 1232545455465655565n

console.log(id === anotherId); // false because symbol is unique


// 2. Non primitive or Reference Type
// Original reference of the data is provided. Gives you a reference to the original data
// Array, Objects, Functions

// Array Declaration
const heros= ['a', 'b', 'c']

// Object Declaration
let myObj = {
    name: "prachi",
    age:  23,
}
 
// Fucntion Declaration
const myFunction = function(){
    console.log("Hello, Prachi");
}

// ================================================

// Stack MEMORY (Primitive) you get the copy for all the changes
//  Heap memory (Non- Primitive) here everything is changed in the orignal

// In stack basically copy is given of rthe object so the orignal value is never changed.

// Example of Stack memory

\
let myYouTubename = 'prachipiyushbhaijethava'
let anotherName = myYouTubename

console.log(myYouTubename)
console.log(anotherName)

anotherName = 'khushijethava'

console.log(myYouTubename)
console.log(anotherName)

// Here as you can see that the orignal value stays the same.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Non-primitive
// Example of Heap memory
/* for this we know that it will give the reference for the orignal valuse 
thus when you change it then the orignal value is also changed.
*/
let userOne ={
    email: "prachijethava@gmail.com",
    age: 22,
}

let userTwo = userOne
userTwo.email = "khushijethava@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
/* Here you can see that both the emails for the users are changed.
This is the heap memory thus will make changes in the orignal value as well.
*/