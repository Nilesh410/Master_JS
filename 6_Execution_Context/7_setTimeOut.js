/* setTimeout(`
console.log("Welcome to learn")
console.log("JAVA Script")
`,1000) */

console.log("Settimeout function")
debugger
const t1=setTimeout(`console.log("Timer1")`,0)
const t2=setTimeout(`console.log("Timer2")`,500)
const t3=setTimeout(test,-1000)


function test()
{
    console.log("Timer3");
}
//clearTimeout(t2) //clear timeOut interval

