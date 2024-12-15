/* 
   Que:- what is execution context? 
   -> It is a area of memory, when JS function is execute 
   It has two phases 
   A) Memory Phase 
   B) Execution Phase

   Imp:- whenever any execution context will be generate that time one variable has been create with name of this of object type and its value is window bydefault.

   Both this and execution context will be vanish when function execution is finnished. 
*/

function showMessage()
{
    "use strict"
    console.log(this) 
 
    //in node js it is object, in browser it is a window
}
showMessage() //object
//1. when function call by using name then this show object (window object in browser) and for strict mode show undefined

new showMessage() 
//2.this is pointed to newly created object of type showMessage()


//3
//showMessage.call({age:35})

//4 
const obj={
    showMessage,
    age:35
}
obj.showMessage()