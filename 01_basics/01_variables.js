const accountId = 3333
let accountEmail = "prachijethava1211@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"
// variable can be declared by the way without giving any name 
let accountState
// this means that accountState is undefined type

// accountId = 2 // not allowed
accountEmail = "prachi.jethava2001@gmail.com"
accountPassword = "1111"
accountCity = "India"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// to declare constant there is only one way i.e. const
// to declare variable we have "let" and "var"
// {} is called scope 
// we usually use the let because of the scope thing
/* we use the let because that will not change the 
 variable everywhere whereas the var is the keyword whi
 ch changes the value of that variable everywhere */
 /*Prefer not to use var because of issue
  in block scope and functional scope
 */

