//1
/* const object={
    message:"Hey Hello",
    arrow:()=>{
        console.log(this.message) //undefined
        return this.message
    }
}
console.log(object.arrow())//undefined */

//2
/* const object={
    message:"Hey Hello",
    myarrow(){
        const message="Hey Hi"
        console.log(message) //Hey Hi variable access 
        return this.message //access the object key
    }
}
console.log(object.myarrow())//Hey Hello */

//3
/* function Pet(name)
{
    this.name=name
    this.getName=()=>this.name
}
const cat=new Pet("Steffy")
console.log(cat.getName())//steffy
//in arrow function this is depends on parent 
console.log(typeof(cat))
const {getName}=cat
console.log(getName())//steffy */

//4
/* const object={
    message:"Hey Hello",
    myarrow(){
        const message="Hey Hi"
        console.log(this.message) //Hey Hello variable access 

    }
}
setTimeout(object.myarrow,1000)//undefined */

//5
/* const objects={
    message:"World",
    myFunc(){
        return `Hello, ${this.message}!`
    },
    myArrow:()=>{
       return `GoodBye,${this.message}!`
    }
}
console.log(objects.myFunc())//Hello World
//Bcoz in normal function this is access object member
console.log(objects.myArrow())//GoodBye undefined
//Bcoz in arrow function this is depent on parent and object do not create any scope so object is not a parent */


//6
const objects={
    name:"Nilesh Shirude",
    age:30,
    info:{
        nickname:"NSS",
        myFunc(){
            console.log(`My nickname is ${this.nickname} and name is ${this.name}`)}
        // myFunc:()=>{
        //     console.log(`My nickname is ${objects.info.nickname} and name is ${objects.name}`)
        // }
        //  myFunc(){
        //     console.log(`My nickname is ${objects.info.nickname} and name is ${objects.name}`)}
        
    }
}
objects.info.myFunc()