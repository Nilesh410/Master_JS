/* 
String :- In JS string an one of the data type 
Creation of String:- 
Syntax :- variable declaration variable name="String" 
e.g. let city_name='Pune' 

Property :- Every string has length which is find out by length property 

city_name.length

Function belong to String :- 

Function does not have argument 
    1. toUpperCase():- to convert in uppercase 
    2. toLowerCase():- to convert in lowercase 
    3. trim():- 
    But in this function original string will not be changed 
*/

const city_name="PuNe"
console.log("original city name=",city_name)
console.log(city_name.length)

console.log(city_name.toUpperCase())
console.log(city_name.toLowerCase())
