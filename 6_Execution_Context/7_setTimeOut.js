/* setTimeout(`
console.log("Welcome to learn")
console.log("JAVA Script")
`,1000) */

const t1=setTimeout(`console.log("Timer1")`,1000)
const t2=setTimeout(`console.log("Timer2")`,2000)
const t3=setTimeout(test,-3000)


function test()
{
    console.log("Learn setTimeout function");
}
//clearTimeout(t2) //clear timeOut interval

