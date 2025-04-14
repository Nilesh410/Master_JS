let object={
    name:"Nilesh Shirude",
    add:"Atharva Flat No505, Mohan Nagar, Baner, Pune",
    mob_no:"8956210124",
    email_id:"shirudenileshs@gmail.com"
}

console.log("My information")
for(const key in object)
{
    console.log(key,":",object[key]);
}

let key_name=Object.keys(object)
for(const value of key_name)
{
    console.log(`${value} :${object[value]}`)
}
console.log(Object.values(object))
console.log(Object.entries(object))