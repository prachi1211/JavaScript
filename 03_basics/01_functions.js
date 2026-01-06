function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
}

// sayMyName()


/*function addTwoNumbers(num1, num2){   //parameters
    console.log(num1 + num2)
}

addTwoNumbers(1,2)  //arguments
*/

function addTwoNumbers(num1, num2){   //parameters
    let result = num1 + num2
    return result
}

const result = addTwoNumbers(1,2)  //arguments

// console.log("Result:", result)

/*
function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("prachi"))
console.log(loginUserMessage())
*/


// function nameExsist(name = "prachi"){   // to set default value as prachi if user do not enter the name.
function nameExsist(name){
    if(name === undefined){
        return console.log('Please enter Name.')
    }
    return `Name: ${name}`
}
console.log(nameExsist())
