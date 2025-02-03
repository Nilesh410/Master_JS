let arr=[12,23,45,33,67,54,89,92]
console.log(arr)
/* [
    12, 23, 45, 33,
    67, 54, 89, 92
  ] */

console.log(arr.slice(2,5))//[ 45, 33, 67 ]
console.log(arr.slice(-2,-3))//[]invalid range, it work on -ve paramteres also,
console.log(arr.slice(2,-3))//[ 45, 33, 67 ]
console.log(arr.slice(-4,-2))//[ 67, 54 ]
console.log(arr.slice(2,0))//[]invalid range, parameters values does not swap 
//slice method works from left to right
//And original array is still present as it is 
console.log(arr);

console.log(arr.splice(2,1))//[45]
console.log(arr); //45 has remove from the array
/* [
    12, 23, 33, 67,
    54, 89, 92
  ] */
console.log(arr.splice(-4,-2))
console.log(arr)
console.log(arr.splice(-4,2))//[ 67, 54 ]
console.log(arr);//[ 12, 23, 33, 89, 92 ]
console.log(arr.splice(2,0))//[]

console.log(arr)
console.log(arr.s)