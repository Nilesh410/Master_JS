/* function demo ()
{
    console.log(arguments)
} */

//Find out the sume of arguments value but we dont know how many arguments we passed
function demo()
{
    let sum=0
    for( let i=0;i<arguments.length;i++)
    {
        sum +=arguments[i]
    }
    return sum
}
console.log(demo(2,3,4))
