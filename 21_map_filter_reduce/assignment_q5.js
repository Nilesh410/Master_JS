/* 
  Given an array of strings, count the number of times each string appears and return an object with the string as the key and the count as the value.
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Your code here
// Expected Output: { apple: 3, banana: 2, orange: 1 }
*/

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const output={}
fruits.forEach((fruit)=>{
    if(output[fruit])
    {
        output[fruit]=output[fruit]+1
    }
    else
    {
        output[fruit]=1
    }
})
console.log(output)