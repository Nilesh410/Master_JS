//Array:- In JS array is a data strcture to store the heterogenous data at index based
//Syntax :- variable decleration [array elements seperated by comma]
//Array is one of the non primitve data type and its type its nothing but the object 
//Object have object literal, array, and function non primitive data type 
//when you find out the typeof(arrayname)=> object 
//typeof(object_literal)=>object 
//typeof(function_name)=>function 

const arr=["Apple","Orange","WaterMelon","Grapes"]
console.log(arr)
console.log(arr[2])
arr.push("MuskMelon")
console.log(arr);
arr.push(322,122)
console.log(arr)
arr.pop()
console.log(arr);
console.log(arr.length)
console.log([]===[])//false =both array store at differnt address
console.log("NSS")
const arr1=[]
const arr2=[]
console.log(arr1==arr2);


