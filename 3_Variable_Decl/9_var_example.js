var num=10
let result=function f()
{
    console.log("num from inside the function but before redeclare and initialize:",num)//undefined 
    var num=20
    console.log("num from inside the function:",num)//20
}
//f()//error f is not defined 
result() //function is execute
console.log(result()) //return value from the function is undefined 