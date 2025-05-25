const score =500
console.log(score);
console.log(typeof(score));

const balance = new Number(1000)
console.log(balance);

console.log(balance.toString());


// =================================Math==================

// it is also an inbuild library and it is cosidered as object with a lot of con straints

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

// rememeber one formula for random number generation in given range

const min =10
const max=20
console.log(Math.floor(Math.random()* (max-min +1)) + min);