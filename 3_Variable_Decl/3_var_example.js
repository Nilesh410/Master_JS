console.log(data)//undefined due to hoisting 
var data=10
console.log(data) //10 var variable has a global scope

function display()
{
    console.log(data) // 10 
    data=20 //reinitalize its possible in different scope 
    console.log(data) //20 global value changed 
}
display()
console.log(data) //20 var has a global scope 