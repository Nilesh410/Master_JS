//JS Code to find out of index of multiple occurence of same element 
//JS there is no such method directly to find out indices of multiple occuence of same element by we can find out by some logic and foreach function 
const arr=[10,12,34,12,56]
let target_value=12
let occ=[]

arr.forEach((ele,index)=>{
    if(ele===target_value)
        occ.push(index)
})
console.log(occ)