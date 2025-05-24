// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = outsideTemp = null
let userEmail;


const id = Symbol("123")
const anotherId = Symbol('123')

const bigNumber = 1232545455465655565n

console.log(id === anotherId);


// Non primitive or Reference Type

// Array, Objects, Functions

const heros= ['a', 'b', 'c']
let myObj = {
    name: "prachi",
    age= 23,
}

const myFunction = function(){
    console.log("Hello, Prachi");
}