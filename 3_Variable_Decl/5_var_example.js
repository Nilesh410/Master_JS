console.log(data)//undefined due to hoisting 
var data=10
console.log(data) //10 var variable has a global scope
data=20 //reinitalize is possible withhin the same scope 
var data=30//redeclare is possible witihin the same scope 
function display()
{
    console.log(data) // 30 
    data=40 //reinitalize is possible in diff scope 
    console.log(data) //40 global value changed 
}
display()
console.log(data) //40 var has a global scope 