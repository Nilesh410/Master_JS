/* Que:- What is the higher order function:- 
   Ans:-  A function that returns a function or 
          takes other functions as arguments is called a higher-order function.
  Que:- which are the inbuilt functions are higher order function in JS
  Ans:- every, map, filter, setTimeout

  Que :- what is call back function?
  Ans:- Function that pass to function as a argument then it is called as call back function 
    e.g. arrow function as a callback function 
  Que:- what is the first order function?
*/

/* function finalsalary(salary_employe)
{
    let final_salary
    let result=salary_employe.map((salary)=>{
        if(salary>30000)
            final_salary=salary-salary*0.10
        else
            final_salary=salary
        return final_salary
    })
    console.log(result)
}

let salary_employe=[43000,32000,23000,15000,56000]
finalsalary(salary_employe) //return employe final salary after 10 tax deduction (criteria for tax salary >30000) */


/* function display_fact(num,fact) //higher order function 
{
    return fact(num)
}
function fact(number)  //call back function 
{  
    if(number===0)
        return 1
    else
        return number*fact(number-1)
    
} */
//different way to write down display_fact
/* function display_fact(num,fact)
 {
    if(num===0)
        return 1
    else
       return num*fact(num-1,fact)
 }       
 
let no=50
let factorial_no=display_fact(no,display_fact)
console.log(`Factorial of no ${no}=`,factorial_no) */

const fact=(num,callback)=>{
    if (num===0)
        return 1
    else
       return num*fact(num-1,fact)
}

console.log(fact(5,fact))