var data=10
console.log(data) //var variable has a global scope

function display()
{
    console.log(data) //Also it has functional scope 
}
display()
console.log(data) //var has a global scope 