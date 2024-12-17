const name1=prompt("Enter the name of person")
let age=prompt("enter the age of person")

console.log(`Name of person is ${name1}`)  
console.log(`Age of the person is ${age}`) 

while(true)
{
    if(age>0)
        {
            if(age>=1 && age<=5)
                console.log("Person is a just at kid age")
                
            else if(age>5 && age<=10)
                console.log("Person is at child age")
                
            else if(age>10 && age<=18)
                console.log("Person is at teen age")
            else if(age>18 && age <=25)
                console.log("Person is at college age")
            else if(age>25 && age <=35)
                console.log("Person is at young age")
            else if(age>35 && age <=50)
                console.log("Person is at middle age")
            else if(age>50 && age<=60)
                console.log("Person in at retire age")
            else 
               console.log("Person is retired and enjoy his life") 
            break
        }
        else
        {
            age=prompt("Please enter the valid age")
        }
}
console.log(`Hello person`)