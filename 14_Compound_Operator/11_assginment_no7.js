//Write JavaScript code that checks whether a given number is a prime number or not. Print "Prime" if it's a prime number, otherwise print "Not Prime".
let num=5
let alert=0
if(num===1||num===0)
{
    console.log("0 and 1 is not a prime no");
}
else{
    for(let i=2;i<num/2;i++)
    {
        if(num%i===0)
        {
            alert=1
            break
        }
        
    }
    if(alert===0)
        console.log("given no is a prime number")
    else
        console.log("given no is not a prime number")

}



