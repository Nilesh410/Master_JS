const user1={
    name:"coder",
    hobbies:["Programming","Badminton","Songs"]
}
const user2=structuredClone(user1)
//const user2=JSON.parse(JSON.stringify(user1))
user2.hobbies.push("cricket")


console.log(user1)
console.log(user2)
