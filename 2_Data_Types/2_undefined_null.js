/* Question 1 :- Difference between Nan, null and undefined => in the form of description and data type 

1. Nan :- Not a number - used when a difficult to respresent the result or some mathematical cal 
like 0/0 or sqrt(-1) then its shows by Nan 

2.Undefined:- This is occures when we declared the variable or objecct but do not assign any value to it.

3.Null:- It means that the object is empty and isn't pointing to any memory address.

Question 2:- Data type of 
Null-> object
undefined-> undefined
Nan -> number

*/


//1.Nan
/* console.log(5*"NSS"); //NaN
console.log(5-"NSS"); //NaN
console.log(5/"NSS"); //NaN
console.log(typeof NaN) //number */

//Undefined
/* let myname;
console.log(myname); //output:- undefined
console.log(typeof undefined) //output:- undefined */


//Null:- It means that the object is empty and isn't pointing to any memory address.
console.log(1+null)//1
console.log(1-null)//1
console.log(1*null)//0
console.log(1/null)//infinity
console.log(typeof null) //object
console.log(null==0) //false
console.log(null===0) //false
console.log(null>=0) //true
console.log(null<0) //false
console.log(null>0) //false



