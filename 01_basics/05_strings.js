const name = 'Prachi' // Primitive String  // this is string
const repoCount = 50

// Method 1 but never used
console.log(name + repoCount + " Value");

// Method 2  String Interpollation
console.log(`My name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('khushi') // String object not a primitive // this is object

console.log(gameName[0]);  //k
console.log(gameName.__proto__);  //{}

console.log(gameName.length);  //6 
console.log(gameName.toUpperCase);  // Funtion: toUpperCase
console.log(gameName.toUpperCase());  //KHUSHI

// Here the orignal value is not changed let's confirm
console.log(name);
console.log(typeof(name)); //value itself
console.log(gameName); // it is the object

console.log(gameName.charAt(2));  // u  //this is used to find on passed position which charater we have
// if the postion is beyond the string length then it will return nothing also will not throw any kind of error.

console.log(gameName.indexOf('jvkn'));  // -1
console.log(gameName.indexOf('p'));  // -1
console.log(gameName.indexOf('k'));  // -1
const newString = gameName.substring(0,4)
console.log(newString);
// Here in the substring the negative value is not accepted and will not obey the rule

const anotherString = gameName.slice(-1,3)
console.log(anotherString);
// Here the slice is basically like python and will obey and allow the negative values to print the string in the reverse manner as well.

const trimString = " prachi   "
console.log(trimString);
console.log(trimString.trim());


const url ="https://prachi/abc%20jethava.com"
console.log(url.replace('/abc%20', '-'));