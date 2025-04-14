function method()
{
    console.log("Message from function")
}

const obj={
    msg:"Show the example of function and method",
    method:function()
    {
        console.log("Message from method");
    },
    method1:()=>{console.log("message from arrow function")}
}
method()
obj.method()
obj.method1()