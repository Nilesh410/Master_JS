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

//But Object.assign(obj,obj) is old technique
//Now day we follow the another process -> By using spread operator 
//Syntax :- let object name={...existing object}

let obj3={...obj}
obj3.first_Name="Kiran"
console.log(obj)
console.log(obj3)
//It is same for array also 

let newfruits=[...fruits]
console.log(fruits)
console.log(newfruits);
