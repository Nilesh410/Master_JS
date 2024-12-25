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
obj1.edu='MTech' //add new element 
delete obj1.year_exp //delete the existing ele by delete
console.log(obj1)

/* Object.freeze(obj1)
delete obj1["mob-no"]
obj1.city='Pune'
obj1.email_id='shirudenileshs@gmail.com'
console.log(obj1)  */
//due to freeze we can not update the object element as well as we can not add or delete any object element 
Object.seal(obj1)
delete obj1["mob-no"]
obj1.city='Pune'
obj1.email_id='shirudenileshs@gmail.com'
console.log(obj1) 
//due to seal we can just modify the existing element value but we can not add or delete any element from the object using seal method

//How to check any key present in the object or not 
console.log('edu' in obj1) //true 