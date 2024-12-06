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

