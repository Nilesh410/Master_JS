const arr=[23,12,34,55,23]
const arr1=["Grapes","Watermelon","Maskmelon","watermelon"]
console.log(arr)//[ 23, 12, 34, 55, 23 ]
//1)push()
arr.push(67)
console.log(arr)//[ 23, 12, 34, 55, 23, 67 ]
//2)pop()
arr.pop()
console.log(arr) //[ 23, 12, 34, 55, 23 ]
//3)shift()
arr.shift()
console.log(arr)//[ 12, 34, 55, 23 ]
//4)unshift()
arr.unshift(11)
console.log(arr); //[ 11, 12, 34, 55, 23 ]
//5)concat
console.log(arr.concat(arr1)); //[ 11, 12, 34, 55, 23, 'Grapes', 'Watermelon', 'Makmelon' ]
console.log(arr)//[ 11, 12, 34, 55, 23 ] 
//concate function does not change the original array elements 

//6) indexOf()
arr.push(12)
console.log(arr);//[ 11, 12, 34, 55, 23, 12 ]
console.log("index of 12:-",arr.indexOf(12))//1 it shows the only index of occurence of first ele
console.log("index of Watermelon:-",arr1.indexOf("Watermelon"));
console.log("index of watermelon:-",arr1.indexOf("watermelon"));
console.log("index of waterMelon:-",arr1.indexOf("waterMelon"));

//7) includes()
console.log("12 present in the array or not",arr.includes(12))//true show ele is present in the array
console.log("waterMelon is present or not:-",arr1.includes("waterMelon"))

//8) reverse()
console.log(arr.reverse())
console.log(arr);//original arry has changed after reverse operation on given array
console.log(arr1.reverse())

//9) sort()
console.log(arr1.sort());//[ 'Grapes', 'Maskmelon', 'Watermelon', 'watermelon' ]
console.log(arr1);//[ 'Grapes', 'Maskmelon', 'Watermelon', 'watermelon' ]
console.log(arr.sort())//[ 11, 12, 12, 23, 34, 55 ]
console.log(arr)//original array has changed after sorting [ 11, 12, 12, 23, 34, 55 ]

const arr2=[18,11,13,16,15,26,22,21,8]
console.log(arr2.sort());
//they sort as per the series [11, 13, 15, 16, 18, 21, 22, 26,  8]
//sort by UTF 16 code 

//Slice():- abstract some content of array or subarrat end index value is excluded 
console.log(arr.slice(2,4))//[ 12, 23 ]
console.log(arr);//[ 11, 12, 12, 23, 34, 55 
//In slice method original array is as it is there 

console.log(arr)//[ 11, 12, 12, 23, 34, 55 ]
console.log(arr.splice(2,1,89))//[ 12 ]
console.log(arr)//[ 11, 12, 89, 23, 34, 55 ]
//splice remove the ele
