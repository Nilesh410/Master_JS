let message="Global";
function outerFunction()
{
    let message="Outer";
    function innerFunction()
    {
        console.log(message);
    }
    return innerFunction;
}

let closureFunc=outerFunction()
closureFunc()
