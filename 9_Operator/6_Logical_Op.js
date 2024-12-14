console.log(5 && 6)
console.log(0 && 2)
console.log(0 || 2)
console.log(5 || 6)
/* 
when we performed logical operation between two numbers then its perform with truthy and falsy value */

console.log("Nilesh" && 0)
console.log("" && 2)
console.log("" || null)

//Bitwise And Operator 
console.log(4 | 6)

//Not operator (!)
console.log(!null) //true 

console.log(true && false || true )

console.log(0 || 1 && 2 || 3 )
console.log(0 || "" || null || undefined || "default");

let a = "";

let b = 0;

let c = false;

console.log(a && b || c || "fallback");
