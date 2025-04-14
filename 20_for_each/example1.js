let arr=['apple','watermelon','muskmelon','popogenate','banana']
/* The forEach() method of Array instances executes a provided function once for each array element. 

Unlike map(), forEach() always returns undefined and is not chainable.

callbackFn
A function to execute for each element in the array. Its return value is discarded. The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array forEach() was called upon.
*/
arr.forEach((ele)=>{
    console.log(ele.toUpperCase())
})

