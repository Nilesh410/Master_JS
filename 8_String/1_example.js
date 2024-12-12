/* 
String :- In JS string an one of the data type 
Creation of String:- 
Syntax :- variable declaration variable name="String" 
e.g. let city_name='Pune' 

Property :- Every string has length which is find out by length property 

city_name.length

Function belong to String :- 

Functions does not have argument 
    1. toUpperCase():- to convert in uppercase 
    2. toLowerCase():- to convert in lowercase 
    3. trim():- to remove starting and ending white space 
    4. trimEnd()- remove only ending white space 
    5. trimStart()-remove only starting white space 
But in this function original string will not be changed 

Function have argument:- 
    1. 
    
*/

/* const city_name="PuNe"
console.log("original city name=",city_name)
console.log(city_name.length)

console.log(city_name.toUpperCase())
console.log(city_name.toLowerCase()) */

//Trim Functions 
const str="  Hello JAVA   "
console.log(str.trim())//trim()-> remove the white spaces from beginning as well as from last
console.log(str) //original string does not change
console.log(str.trimStart())//its remove starting white space 
console.log(str.trimEnd())//remove only ending white space 

//includes method
const msg="Mumbai is a capital of Maharashtra"
console.log(msg.includes("capital of"))
console.log(msg.includes("MAHARASHTRA"))//false -> includes it is case sensitive function
console.log(msg.includes("Maha rashtra"))

//indexOf()
console.log(msg.indexOf('M')) //its return the first index of argument char 
console.log(msg.indexOf('w')) //shows -1 for not present char 
console.log(msg.indexOf("Maha"))//shows starting index of string 

//replace and replaceAll() method
console.log(msg.replace('M','N')) //replace given char by new char at first occurrence of the string 
console.log(msg.replaceAll('M',"N"))//its replace all char from given string
console.log(msg)//original string is at it is 

//concat
console.log(msg.concat(",","!"))
console.log(msg)//original string is at is is 

//padStart
const aadhar_no="2345"
const mask_aadhar=aadhar_no.padStart(12,"*")
console.log(aadhar_no)
console.log(mask_aadhar)
console.log(aadhar_no.padEnd(12,"-"))
console.log(aadhar_no.padStart(2,"*"))

//charAt(index)=>shows the char
console.log(msg.charAt(3))
console.log(msg.charAt(45))//return nothing

//charCodeAt(index)=>return unicode value of the char present at that index
console.log(msg.charCodeAt(0))

//split(" ")=> Split a string into substrings using the specified separator and return them as an array.
const split_string=msg.split(" ")
console.log(split_string)
console.log(msg) //original string is at is 

/* slice()=> Returns a section of a string.

 start — The index to the beginning of the specified portion of stringObj.
 end -
    The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj. */

const sub_message=msg.slice(0,6)
console.log(sub_message) //Mumbai
console.log(msg) //original string is at is 
