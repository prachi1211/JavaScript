//singleton
// Object.create

// if you create it with constructor then it will singleton and if you declare it as a 
// leterals then singleton is not created.

// Object literals

// To refer symbol inside the object then declare it inside the [].
// example: [mySym] inside the JsUser
const mySym = Symbol("key1")

const JsUser = {
    name: "Prachi",
    age: 24,
    [mySym]: "mykey1", 
    location: "Ahmedabad",
    email: "prachi.jethava2001@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"],
    "Last Name": "Jethava",
    "Full_Name": "Prachi Piyushbhai Jethava"

}
console.log(JsUser.email)
console.log(JsUser["email"])  //Always use this method

// Why do you need to always access it inside the bracket is becuase:
// When you have string that has SPACE as a key the [dot] method will not work.

console.log(JsUser["Last Name"])
// console.log(JsUser.Last Name) this will throw error where 

// remember: this will work because there is no space in the string
console.log(JsUser.Full_Name)
console.log(JsUser["Full_Name"])

console.log(JsUser[mySym])


// Change the value of the object.
JsUser.email = "prachi@gmail.com"

// Lock/ Freeze the value so that no one change the value
// Object.freeze(JsUser)
JsUser.email = "jethava@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

// How to reference the key in object:
JsUser.new = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.new());
