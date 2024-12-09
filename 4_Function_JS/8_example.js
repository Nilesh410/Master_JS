//1
const display=new Function('data','return data')
console.log(display("NSS"))

//2
const result=new Function('data','return data%2')
console.log(result(5))

//3
const person_info=function(initial_name,age)
{
    this.initial_namename=initial_name
    this.age=age
}
let result1=new person_info("NSS",35)
console.log(result1)

//4 constructor function to find out even and odd
let e_o_no=function(no)
{
    if(no%2===0)
        this.message= "no is even no"
    else
        this.message= "no is odd"
}
let output=new e_o_no(17)
console.log(output)
console.log(typeof(output)) //constructor always return an object 