/* Que 1) what is function hoising ? 
Ans:- calling the function before its declaration and definition and its execute the definition
Function hoisting is applicable only to function decleration not the function expression properties
*/

/* display("Nilesh Shirude") //Nilesh Shirude
function display(name)
{
    console.log(`Name is ${name}`)
} */

/* result("Nilesh") //error for var as well as let.const variable 
const result=function(name)
{
    console.log(`My name is ${name}`)
} */

myname("NSS")  //same error
let myname=new Function('name','console.log(`my name is ${name}`)')