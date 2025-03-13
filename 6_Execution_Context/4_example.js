//Observe the scope of program 
/* 
   1) Global scope :- when we start the execution then its goes to globl scope 
   ->global scope divided into two category:- window object(global) + script scope
   ->window object :- it has variable with decleration of var 
   ->script scope:- variables with decelation of let and const 
   -> global variables access any where in the program bcoz its scope is global
   2) local scope :-
   -> local scope access within the block of code
   -> variable declerare in the perticular block of code 
*/
debugger
const userName="Nilesh"
const userAge=35
var a=5
var b=10
function add()
{
    const a1=3
    const b1=5
    console.log("a+b=",a+b)
    console.log("a1+b1:",a1+b1)
}
function substract()
{
    const a2=13
    const b2=5
    console.log("a-b=",a-b)
    console.log("a2-b2=",a2-b2)  
}
add()
substract()