//Non primitive data types called as reference types
//Primitive Data types called as value type data type

//Non Primitive Data Types 

const obj1={
    emp_name:'Nilesh Shirude',
    role:'Assistant Professor',
    dept:'E&TC',
    joining_date:'4th Sept 2014',
    year_exp:10,
    email_id:'nsshirude@pict.edu',
    "mob-no":8956210124,
    skill:'JAVA, JS, OOP Programming, DSA'

}
console.log(obj1)
const obj2={
    emp_name:'Nilesh Shirude',
    role:'Assistant Professor',
    dept:'E&TC',
    joining_date:'4th Sept 2014',
    year_exp:10,
    email_id:'nsshirude@pict.edu',
    mob_no:8956210124,
    skill:'JAVA, JS, OOP Programming, DSA'
}
console.log(obj2)
console.log(obj1===obj2)//false 
//Even key values of two objects are similar still they equality shows false bcoz objects are not compare with their elements its compare with their reference. Two similar objects are created on separated memory allocation 

console.log(obj1.email_id) //.notation 
console.log(obj1["mob-no"]) //bracket notation

obj1.email_id='shirudenileshs@gmail.com'
console.log(obj1)





