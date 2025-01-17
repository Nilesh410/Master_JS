/* 
    
You are given an array of people's ages. 

let ages = [83, 26, 32, 13, 23, 3, 36, 28, 64, 48]

After following each step print the result to the console.

Step 1: Add a person’s age at the end of the array. He is 19 years old.

Step 2: Add another person’s age at the start of the array. She is 22 years old.

Step 3: Replace the age of the person on index 3 with 17.

Step 4: Sort the array in ascending order.

Step 5: Change it in descending order but do not use the sort method again.

Step 6: Now remove the oldest person and the youngest person from the array.

Step 7: Check if the person you added who was 19 years old still exists in the array or not and if he does then also check what his age index is now and print it on the console.
*/

let ages = [83, 26, 32, 13, 23, 3, 36, 28, 64, 48]

console.log(ages)

//1) add at last 
ages.push(19)
console.log(ages)
//11 push function add the new element in the array and return length of new array

//2) add at bigining 
ages.unshift(22)
console.log(ages)
//unsfhift also return the length of new array 

//3) Replace the age of the person on index 3 with 17.
ages.splice(3,1,17)
console.log(ages);

//4) Sort the array in ascending order.
console.log(ages.sort())
console.log(ages)//main variable values are changed 

//5) Change it in descending order but do not use the sort method again.
console.log(ages.reverse()) //[83, 64, 48, 36,  3,28, 26, 23, 22, 19,17, 13]
console.log(ages)//original position of elements are chagnes and array has been updated 

//6) Now remove the oldest person and the youngest person from the array.
ages.shift()
ages.pop()
console.log(ages)//[64, 48, 36,  3, 28,26, 23, 22, 19, 17]

//7) Check if the person you added who was 19 years old still exists in the array or not and if he does then also check what his age index is now and print it on the console.
if(ages.includes(19)==true)
    console.log("Element is present at index:",ages.indexOf(19));
else
    console.log("Element is not there")
