const arr=[23,12,34,55,23]
const arr1=["Grapes","Watermelon","Makmelon"]
console.log(arr)//[ 23, 12, 34, 55, 23 ]
arr.push(67)
console.log(arr)//[ 23, 12, 34, 55, 23, 67 ]
arr.pop()
console.log(arr) //[ 23, 12, 34, 55, 23 ]
arr.shift()
console.log(arr)//[ 12, 34, 55, 23 ]
arr.unshift(11)
console.log(arr); //[ 11, 12, 34, 55, 23 ]
console.log(arr.concat(arr1)); //[ 11, 12, 34, 55, 23, 'Grapes', 'Watermelon', 'Makmelon' ]
console.log(arr)//[ 11, 12, 34, 55, 23 ] 
//concate function does not change the original array elements 
arr.push(12)
console.log(arr);//[ 11, 12, 34, 55, 23, 12 ]
console.log(arr.indexOf(12))//1 it shows the only index of occurence of first ele


