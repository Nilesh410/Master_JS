# Master in JAVA Script 
## 1. Introduction to JS 
JAVA script has invented by Brendan Eich in 1995 after it was standered by ECMA in 1997

**ECMA** :- European Computer Manufactures Association  
**ES8** :- Current version of ES  
**V8 Engine** :- JS Engine in Chrome browser  
Firefox JS Engine :- Spider Monkey

**NodeJS** :- Ryan Dahl:- Provided environment to execute JS code 

<mark>JS is Compiled and Interpreted Language   
Initally it was interpreted language</mark>

console :- 
Alternate name is REPL

**REPL**:- Read Evaluate Print Loop  

**Display**:-   
console.log("Message/value to display")    
<mark>In browser why the undeined is coming after console.log rendering.</mark>  

**Shortcut Key**:- 

  | Keys | Action |
  | -----| ------ |
  | ctrl+l | shortcute for erase |
  | ctrl+/ | comments |
  | ctrl+shift+p| open command palllate |
  | shift+alt+A | comment for multiple lines|
  | shift+alt+F | allign or format the code properly|
  
## Extensions to Download
  | Extension | Purpose |
  | -----     | ------ |
  | JS ES6 | JS Code Snippet |

## 2. Data Types in JS
  Different Data Types in JS     

    A) Primitive Data Types 
       -Numbers (Refer 1_example.js)
       -String  (Refer 1_example.js)
       -Bigint
       -undefined (Refer 2_undefined_null.js)
       -null (Refer 2_undefined_null.js)
       -boolean (Refer 1_example.js)
       -symbol

    B) Non Primitive Data Types
       - array
       - object   
### Truthy and Falsy Value 
  (Refer 3_truthy_falsy.js)  
which are the data types are false and truthy value in JS  
   -> Truthy value is a value that is considered true when encountered in a Boolean context  
   -> All values are truthy unless they are defined as falsy.   
   -> That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.

### Data Type Conversion 
> ##### Conversion to number  
> 1. String => number/NaN   
> 2. null=> 0  
> 3. boolean=>1/0

> ##### Conversion to boolean
>  1. number=>boolean true/false
>  2. string=>boolean true/false
>  3. undefined=>false
>  4. null=>false

> ##### Convert to String
> 1. number=>String
> 2. boolean=>String
> 3. null=> String
> 4. undefined=>String

### Mathematical Operation on String Data (as a number)
> #### If string is a number then only these operation are executed
>   string +string=>string  
>   string -string=>number  
>   string *string=>number   
>   string /string=>number  


### Interview Questions belongs to Data Types
 1) what are the different data types in JS 
 2) what is the data type of NaN 
 3) what is the difference between Nan and null and undefined  
 4) what is difference between function calling using functionname() and console.log(functionname())   
 5) what is the data type of null
 6) Is null has a memory allocation?
 7) when NaN is used?
 8) 

## 3. Variable Decleration 
#### There are three ways to declare the variable in JS  
  1. **var** (Refer 3_Variable_Decl)    
    -> var is global scope and functional scope  
    -> we can access var variable before decleration and initalization due to hoisting  
    -> we can reinitialize var variable in same scope  
    -> we can redeclare the var variable with same name in same scope     
  2. **let**   
    -> let has block scope   
    -> block scope varible can not access before decleration due  to TDZ  
    -> it can reinitialize in the same scope   
    -> but we can not redeclare in the same scope with same name  
  3. **const**  
    -> same as let variable   
    -> but only difference is we can not reinitalize or change the value of const variable  

#### Questions
Questions Related with the scoping:-
1) what is scope of let, var and const variable
2) can we redeclare and re initialize the let,var and const type of variable
3) How JS program work internally?
4) what is lexical scoping?
5) what is hoisting?
6) what is temporal dead zone?
7) what is auto global of variable?
8) How to avoid auto global process?
9) what is stack ?
10) what is call stack?
11) what is execution context?
12) what is global execution context?

## 4 Function 
 #### 1. what is the function?
  -> Function :- performing the perticular task or operation and we can call multiple time without 
    writing reapeadly

 #### 2. what is the syntax of function // way to define function in JS 
  -> There are different way to define function in JS  

    1. Function Decleration/ function Definition / Function Constant   
       Syntax:- function functionname(parameter name)
       {
          function definition
       } 
        calling :- function name()
     
    2. Function expression 
      Syntax :- 
      let variablename= function functionname()
      {
          function defintion 
      }
      calling:- variablename()

    3. Anonymous Function:- those function has dont have any name 
        Syntax:
        let variabel name=function()
        {
            function definition 
        }
        calling variablename()
    
    4. IIFL :- Immediately Invoked Function Expression Function executes immediately after its decleration and used anonymous property
        syntax :- 
            (function () {
                console.log("Welcome to Javascript");
                })();
    5. Arrow Function 
        Syntax :- 
        let variable name=(arument list)=>{
            function definition }
        }
    6. Constructor Function 
        The concept of a function constructor is to create a function object which executes in the global scope.   
        It can be used to create multiple objects that are similar.   
        The function constructor has similar functionalities as the function expression.  
        A constructor function is called with the new keyword to create an object. 
        The Function( ) is the constructor which houses the arguments:  
          example1
            var F = new Function(arg1, functionBody)
            var F = new Function(arg1, arg2, functionBody)
            var F = new Function(arg1, arg2, .........., argN, functionBody)

          example 2
            / new Function creates a new function object 'multiply'
            const multiply = new Function('a', 'b', 'return a * b');

            console.log(multiply(2, 6));
            // expected output: 12

          example 3
            // constructor function
            function Person() {
                this.name = "Anita",
                this.age = 21
            }
            // create an object
            const person = new Person();

            //access properties
            console.log(person.name);
            console.log(person.age);

  #### 3. Rest Operator   
  Function with rest operator   
     -> If function dont know how many parameter they have to take then they used rest operator or we dont know exactly how many argument will be passing to the function definition in the function     
    -> Definition we used the rest operator.  
       Syntax :- ...variable name 

 #### 4. Object and array as an argument
  -> We can pass the object and array as an argument to the function (Refer 4_example.js)

 #### 5. Higher Order and Call back function 
  -> A function that returns a function or 
     takes other functions as arguments is called a higher-order function. 
     every, map, filter, setTimeout these are the higher order function 
   -> Function that pass to function as a argument then it is  called as call back function 

 #### Interview Question on Function  
  1. what is the function? 
  2. How to define the function in JS? which are the diff way?
  3. what is the rest operator ...variable name
  4. Can we pass object and array as an argument for the function?
  5. what is higher order function?
  6. what is call back function?
  7. what is first order function?
  8. what is arrow function in JS?
  9. Can we call call back function recursively?
  10. Can we used higher order function as a call back function?
  11. Can we call arrow function recursively?(Refer 4_Function_JS-> 5_example)
  12. How to create function using constructor? 
  13. How to create object using constructor function?
  14. what are the way to call function in JS? (Refer 9_example.js)
  15. what is an execution context?
  16. what is call stack ?
  17. what is this keyword? what is the value hold by this keyword? (Refer 5_this_keyword->1_example.js)
  18. which are the different type of scope in JS explain with example.
  19. what is lexical scope in the program? Expain with example(5_this_keyword->2_example.js)
  20. what is the value of this in arrow function with different senerio? (Refer 3_example.js)
  21. Solve some coding questions on this (Refer 4_Q_A.js)
