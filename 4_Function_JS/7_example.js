/* Que:- what is the call back function 
Ans :- A callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of routine or action 

*/

let evenCheck=(ele)=>{
    return ele%2 === 0
}

console.log(evenCheck(23))

const array1=[2,44,68,96]
const array2=[34,21,56,34,7]

const result1=array1.every(evenCheck)
const result2=array2.every(evenCheck)
console.log("array1:",result1)
console.log("array2:",result2)

var result3=array1.every((e)=>e%5===0)
//var result3=array1.every((e)=>(e%5===0))
//var result3=array1.every((e)=>{return e%5===0})
console.log("array1 divisible by 5:",result3)