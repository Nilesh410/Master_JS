//console.log(data)
let data=10
console.log(data) //10 it has block scope 
data=20 //redecleration does not possible withing the same scope 
console.log(data) 

function display()
{
    console.log(data)//20
}
display()
console.log(data) //20