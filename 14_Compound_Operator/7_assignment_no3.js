//Write JavaScript code that finds the maximum number in an array of numbers [5, 10, 2, 8, 15] and prints the result.

let arr=[5,10,2,8,15]
let max_ele=arr[0]
for(let i=0;i<arr.length;i++)
{
   if(arr[i]>arr[0])
    max_ele=arr[i]
}
console.log("max_ele_from_array=",max_ele);