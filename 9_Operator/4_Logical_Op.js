const num1=23
const num2=22
const num3='23'

//1.Equality Operator (==) (Equal to)=> It converts the value implicitly 
console.log(num1==num2) //false
console.log(num1==num3) //true 
console.log(num2==num3) //false (convert the string into no implicitly)

//2.Strict Equality Operator(===)=>It does not convert the value in different data type 
//Its check data type as well as value of the variable 

console.log(num1===num2) //false
console.log(num1===num3) //false 
console.log(num2===num3) //false 

//3. Not Equal Operator (!=) => It converts data type implicitly
console.log(num1!=num2)//true 
console.log(num1!=num3)//false
console.log(num2!=num3)//true 

//4. Strict Not Equal (!==)=> It check data type as well as value 
console.log(num1!==num2)//true 
console.log(num1!==num3)//true
console.log(num2!==num3)//true 

//5. Greater than (>) and Greater than equal(>=)=> Its check greater than or not 
console.log(num1>num2)//true
console.log(num2>num3)//false
console.log(num1>num3)//false
console.log(num1>=num2)//true
console.log(num1>=num3)//true

//6. Less than (<) Less than equal (<=)=> It check first no is less with second number or not
console.log(num1<num2)//false
console.log(num2<num3)//true
console.log(num1<num3)//false
console.log(num1<=num2)//false
console.log(num1<=num3)//true