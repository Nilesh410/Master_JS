//console.log(data)
let data=10
console.log(data) //10 it has block scope 
data=20 //redecleration does not possible withing the same scope 
console.log(data) 

function display()
{
   // console.log(data) //error due to TDZ
    let data
    console.log(data) //undefined block scope-> scope is restrict up to the function 
}
display()
console.log(data) //20 block scope entire code 