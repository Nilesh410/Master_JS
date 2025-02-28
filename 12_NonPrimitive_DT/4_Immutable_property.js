//Freeze function of Object is make object immutable completetly- means its prevent to change the value of property as well we can not add or remove the property inside the objecct 

//seal function of objecct its prevent to add or remove the property in existing object but you can change the value of any property

//defineProerty function -> its make a specific property of object as immutable or prevent to change or delete 



let student={
    "student name":'Nilesh Shirude',
    age:32,
    email:"shirudenileshs@gmail.com",
    mobno:8956210124,
}

// console.log(student)
// console.log(student['std name']);
// console.log(student['student name'])
// student.add='Mohan Nagar,Pune'
// console.log(student);
// student.city='pune'
// console.log(student)
// student.city='delhi'
// console.log(student);

Object.defineProperty(student,"age",
    {
       writable:false,
       configurable:false,
})

student.age=35
delete student.age
console.log(student)