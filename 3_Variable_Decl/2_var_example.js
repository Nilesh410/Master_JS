console.log(data)//undefined due to hoisting 
var data=10
console.log(data) //10 var variable has a global scope

function display()
{
    console.log(data) // 10 Also it has functional scope 
}
display()
console.log(data) //10 var has a global scope 