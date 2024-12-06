let a

function fitch()
{
    a=10
    console.log(a) //10
}
console.log(a)//undefined
fitch() 
console.log(a)//10

//Unlike let, var declarations are hoisted to the top of their containing scope, 
//but the assignment is not hoisted. This means the declaration is moved to the top, 
//but the value assignment happens where it originally appears in the code.