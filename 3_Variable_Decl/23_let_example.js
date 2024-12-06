let num=10;

(function f(){
    //console.log("inside the iife function num value:",num)//undefined
    let num=20
    console.log("after the redeclare in function num value:",num)//20

})()
console.log("outside the function num value:",num)//10