const store1 = ["a", "b", "c"]
const store2 = ["d", "e", "f"]


// store1.push(store2)

// console.log(store1)
// console.log(store1[3][1])

// store1.concat(store2)
// console.log(store1)

// for push and concat both it will give the same result.

const main_store = store1.concat(store2)
console.log(main_store)

// if we store it into the new variable then only it is possible to get the merged arrays.

// const seperate_main_store = [...store1, ...store2]
// console.log(seperate_main_store)

// we can either use new variable to store it using concat and another option is 
// using ... and store them in new variable and that is how you will be able to get the sqame result.

const another_array = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
console.log(another_array)
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

// work of the flat is to make the array 1D.
// Inside the flat you can write till what depth you what to flat it. If it is
// unknown then we can assign it as Infinity.

// Creating Array:

// Check whether that is array or not
console.log(Array.isArray("Prachi"))
console.log(Array.from("Prachi"))
console.log(Array.from({name: "prachi"}))
// Note: If it is not able to create it then it will always return empty array.
// Always specify which part you want to convert it to the array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
// This will convert the variable value into array by using .of method