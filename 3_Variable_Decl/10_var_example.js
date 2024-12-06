var num=10
console.log("num from the outside the function:",num)//access the global scope value

let result=function ()
{
    console.log("num from inside the function but before redeclare and initialize:",num) //undefined
    var num;
    console.log("num from inside the function:",num)//undefned
}

result() //function is execute
console.log("num from the outside the function:",num)//10 access the global scope value