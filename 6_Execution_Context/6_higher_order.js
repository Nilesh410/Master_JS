
//Higher Order Function 
function higherOrder(parameter)
{
    console.log(typeof parameter)
    console.dir(parameter);
    parameter()
}

//Call back function 
// function test()
// {
//     console.log("I am call back function")
// }
// higherOrder(test)

higherOrder(
    function()
    {
        console.log("I am call back function")
    }
)