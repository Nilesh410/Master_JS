let obj1={
    firstname:"Nilesh",
    lastname:"Shirude",
    address:{
        city:"Pune",
        pincode:411045
    }
}
let obj2={...obj1}
console.log(obj1)
console.log(obj2)
obj2.firstname="Suraj"
obj2.address.city="Nashik"
