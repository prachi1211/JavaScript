//  arrays

// mix type, resizable, shallow copies - same reference points
// FYI- deep copies do not share the same reference point.
const myArr = [1,2,3,4,5]


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// it will add the number (here 9) at the start of the array
// myArr.unshift(9)
// it will remove the first character/number from the starting point
// myArr.shift()

console.log(myArr.includes(9));
// it is bolean type return
console.log(myArr.indexOf(3));
// it will return the index
console.log(myArr.indexOf(19));
// it will return the -1 


const newArr = myArr.join()
console.log(myArr);

console.log(newArr);
// it will return you the same answer but will convert the type to string


// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// in slice the only part of the array is return with no change in the original array
// whereas the splice will manipulate the original array as well with the part of it with the mentioned range to be in the another array.
