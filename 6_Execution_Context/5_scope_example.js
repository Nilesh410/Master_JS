
debugger
const a1="Hello"
function outerFunction()
{
    const a2="Hello JS"
    console.log("a2:",a2)

    function innerFunction()
    {
        const a3="Hello JS Programming"
        console.log("a3:",a3)
        console.log("a2:",a2)
        console.log("a1:",a1)
    }
    innerFunction()
}

outerFunction()