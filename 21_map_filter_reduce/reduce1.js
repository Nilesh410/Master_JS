const arr=[1,3,2,1,1,1]
console.log(arr.reduce((previousValue,currentValue,index)=>{
    // console.log(previousValue)
     console.log(currentValue)
     return previousValue
},0))


/* console.log(arr.reduce((previousValue,currentValue,index)=>{
    //console.log(index,currentValue)
   // console.log(previousValue); // 0 1 2 4 5 6 
    return previousValue+currentValue
},0))  //Ans :-7 */


