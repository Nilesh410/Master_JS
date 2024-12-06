//"use strict";
var num=10

function f()
{
    console.log("value of num",num) //undefined
    var num=20
    num_value=15
    console.log("value of num and num_value variable from inside the function",num,",",num_value)//20,15
}

f()
console.log("value of num and num_value variable from ouside the function",num,",",num_value)
//output 10,15 num_value act as a global variable