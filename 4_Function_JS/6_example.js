function return_func(msg)
{
    console.log(msg)
    return function display()
    {
        console.log(msg+"Developer")
    }
}

let result=return_func("NSS")
console.log(result())