// singleton

// Ways to create object
// const user = new Object() -> sigleton object
// const user = {} -> non-singleton object


const user = {}
user.id = "abc123"
user.name = "Prachi"
user.isLoggedIn = false

console.log(user)


const regularUser = {
    email: "prachi@gmail.com",
    fullname:{
        userfullname: {
            firstname: "prachi",
            lastname: "jethava"
        }
    }
}


// We can make nested loops as many as we want
// To access them we can use the [dot] to acess in nested manner.
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname.lastname)

/*
When there are API calls, if the nested dosen't exist then put ? at the end to 
avoid writing if-else conditions.
*/
// console.log(regularUser.fullname?.userfullname.lastname)

 
// Combining Objects
const obj1={1: "a", 2: "b"}
const obj2={3: "c", 4: "d"}

// It will create object inside object
/* const obj3 = {obj1, obj2}
console.log(obj3) */

// Instead of that create it like:
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2) //better to give the {} in front for gurenteed result
// The above code states as: {} -> target and rest -> source
// console.log(obj3);

// Spread operator
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// Objects coming from the database:
const anotheruser =[
    {
        id: 1,
        email: "prachi@gmail.com"

    }
]

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// Checks whether that particular property exist or not.
console.log(user.hasOwnProperty('isLoggedIn'));

// Destructuring bery important for API and even while learning React:
const course = {
    coursename: "JavaScript",
    price: "1000",
    courseInstructor: "hitesh"
}

// Focused on Syntax only
// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor)
