//this keyword in arrow function 
//In arrow function this value should be find by lexically 

const myArrow=()=>{
    console.log(this) //find out lexically from own scoep to global scope
    //node js -> empty object 
    //browser -> window
}
myArrow()

function lex()
{
    const my_Arrow=()=>{
        console.log(this)
    }
    my_Arrow() //show gloal Object from lex function  
}
lex() 

lex.call({}) //show the empty object 

const obj={
    msessage:"Hey Hi",
    arrow:()=>{
        console.log(this.message)
    }
}
obj.arrow() //undefined 
//bcoz object is not a scope still its take from global scope