function method()
{
    //console.log("Message from function")
    return "Message from function"
}

const obj={
    msg:"Show the example of function and method",
    method:function()
    {
        console.log("Message from method");
    },
    //method1:()=>{console.log("message from arrow function")}

    method1:()=>{return "message from arrow function"}
}
const msg=method()
console.log(msg)
obj.method()
console.log(obj.method1())