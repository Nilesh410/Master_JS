function calculateArea(shape,dimensions)
{
     if(shape==="rectangle")
     {
        if(!isNaN(dimensions[0])&&!isNaN(dimensions[1]))
        {
            return dimensions[0]*dimensions[1]
        }
        else
        {
            console.log("dimensions are incorrect")
        } 
     }
     else if(shape==="right_triangle")
     {
        if(!isNaN(dimensions[0])&&!isNaN(dimensions[1]))
        {
            return ((dimensions[0]*dimensions[1])/2)
        }
        else
        {
            console.log("dimensions are incorrect")
        } 
     }
     else if(shape==='circle')
     {
        if(!isNaN(dimensions[0]))
        {
            return (Math.PI*dimensions[0]*dimensions[0])
        }
        else
        {
            console.log("dimensions are incorrect")
        } 
     }
     else
     {
        console.log("please select the proper shape");
     }
     
}

console.log(calculateArea("circle",[3]))