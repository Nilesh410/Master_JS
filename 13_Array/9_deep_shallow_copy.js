let obj={
    first_Name:"Nilesh",
    lastname:"Shirude",
}
let obj1=obj
console.log(obj)
console.log(obj1)

let fruits=["Watermelon","muskmelon"]
let myfruits=fruits
fruits.push("apple")
console.log(fruits)
console.log(myfruits)

//Here both object are pointed to same address
// But we have to make duplicate copy with different address 
//so its create by Object.assign() method
let obj2={}
Object.assign(obj2,obj1)
//Suppose we updated in obj2 then obj1 will not be reflected
obj2.lastname="Patil"

