/* Question 3:- which are the data types are false and truthy value in JS
 -> Truthy value is a value that is considered true when encountered in a Boolean context
 -> All values are truthy unless they are defined as falsy. 
 -> That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.

 if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
 */

if(0)
    {
        console.log("0 is not a falsy value")
    }
    else
    {
        console.log("0 is falsy value")
        if(-0)
        {
            console.log("-0 is not a falsy value")
        }
        else{
            console.log("-0 is falsy value")
            if("")
            {
                console.log(" double quote is not a falsy value")
            }
            else
            {
                console.log("doule quote is falsy value")
                if(NaN)
                {
                    console.log("Nan is not a falsy value")
                }
                else
                {
                    console.log("Nan is falsy value")
                    if(null)
                    {
                        console.log("null is not a falsy value")
                    }
                    else
                    {
                        console.log("Null is falsy value")
                        if(undefined)
                        {
                            console.log("undefined is not a falsy value")
                        }
                        else
                        {
                            console.log("undefined is a falsy value")
                            console.log("data");
                        }
                    }
                }
            }
        }
    }