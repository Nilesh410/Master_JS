/* Lexical Scope :- 
   Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions based on where they are defined in the source code. In simple terms, lexical scope is the scope of a variable or function determined at compile time by its physical location in the code. Unlike dynamic scope, which depends on how functions are called at runtime, lexical scope is static and remains the same throughout the program’s execution.
 */

function lex()
{
    let no=20
    console.log(no) //find out in the own scope 

    const arrow_func=()=>{
        console.log(no) //20 search in the first its own func if it not there then find out one step up in the parent function 
    }
    arrow_func()
}
lex()